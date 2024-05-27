<template>
  <div class="available-page">
    <!-- Filtersectie -->
    <div class="filters">
      <label for="vehicle-type">Select Vehicle Type:</label>
      <select v-model="selectedVehicleType" @change="filterPlates">
        <option value="" disabled selected>Select a vehicle</option>
        <option v-for="vehicle in vehicleTypes" :key="vehicle.id" :value="vehicle.type">
          {{ vehicle.type }}
        </option>
      </select>
    </div>

    <!-- Plates selectie -->
    <div class="plates" v-if="filteredPlates.length">
      <h3>Select a Plate:</h3>
      <select v-model="selectedPlate">
        <option value="" disabled selected>Select a plate</option>
        <option v-for="plate in filteredPlates" :key="plate.id" :value="plate.plate">
          {{ plate.plate }}
        </option>
      </select>
    </div>

    <!-- Datums selectie -->
    <div class="dates" v-if="selectedPlate">
      <h3>Select Dates:</h3>
      <label for="start-date">Start Date:</label>
      <input type="date" v-model="startDate" :min="minStartDate" @change="validateDates" />
      <label for="end-date">End Date:</label>
      <input type="date" v-model="endDate" :min="startDate" @change="validateDates" />
      <button @click="addToCart">Add to Cart</button>
      <p v-if="dateError" class="error">{{ dateError }}</p>
    </div>

    <!-- Winkelwagen -->
    <div class="cart">
      <h3>Cart</h3>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.vehicleType }} - {{ item.plate }} ({{ item.startDate }} to {{ item.endDate }}) - €{{ item.price }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <p>Total Price: €{{ totalPrice }}</p>
    </div>

    <!-- Bevestigings- en Annuleringsknoppen -->
    <div class="buttons">
      <button @click="confirmOrder">Confirm</button>
      <button @click="cancelOrder">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

interface VehicleType {
  id: number;
  type: string;
}

interface Plate {
  id: number;
  vehicleType: string;
  plate: string;
  price: number;
}

interface CartItem {
  vehicleType: string;
  plate: string;
  startDate: string;
  endDate: string;
  price: number;
}

export default defineComponent({
  name: 'Available',
  setup() {
    // Variabelen
    const vehicleTypes = ref<VehicleType[]>([
      { id: 1, type: 'Sportscar' },
      { id: 2, type: 'Car' },
      { id: 3, type: 'Van' },
      { id: 4, type: 'Golfcart' },
      { id: 5, type: 'Scooter' },
      { id: 6, type: 'Bicycle' },
      { id: 7, type: 'Motorcycle' }
    ]);

    const plates = ref<Plate[]>([
      { id: 1, vehicleType: 'Sportscar', plate: 'AB-123-CD', price: 100 },
      { id: 2, vehicleType: 'Car', plate: 'EF-456-GH', price: 80 },
      { id: 3, vehicleType: 'Van', plate: 'IJ-789-KL', price: 120 },
      { id: 4, vehicleType: 'Golfcart', plate: 'MN-012-OP', price: 60 },
      { id: 5, vehicleType: 'Scooter', plate: 'QR-345-ST', price: 40 },
      { id: 6, vehicleType: 'Bicycle', plate: 'UV-678-WX', price: 20 },
      { id: 7, vehicleType: 'Motorcycle', plate: 'YZ-901-AB', price: 70 }
    ]);

    const selectedVehicleType = ref<string>('');
    const filteredPlates = ref<Plate[]>([]);
    const selectedPlate = ref<string>('');
    const startDate = ref<string>('');
    const endDate = ref<string>('');
    const cart = ref<CartItem[]>([]);
    const dateError = ref<string>('');

    const today = new Date().toISOString().split('T')[0];
    const minStartDate = ref<string>(today);

    const filterPlates = () => {
      filteredPlates.value = plates.value.filter(
          (plate) => plate.vehicleType === selectedVehicleType.value && plate.plate !== selectedPlate.value
      );
    };

    const validateDates = () => {
      if (startDate.value && endDate.value && startDate.value > endDate.value) {
        dateError.value = 'End date cannot be before start date.';
      } else {
        dateError.value = '';
      }
    };

    const addToCart = () => {
      if (
          selectedVehicleType.value &&
          selectedPlate.value &&
          startDate.value &&
          endDate.value &&
          !dateError.value
      ) {
        const plate = filteredPlates.value.find(
            (plate) => plate.plate === selectedPlate.value
        );
        if (plate) {
          // Check if the selected plate is already in the cart
          const plateInCart = cart.value.find(
              (item) => item.plate === selectedPlate.value
          );
          if (plateInCart) {
            // Plate already exists in the cart, show error message
            dateError.value = 'This plate is already in your cart.';
            return;
          }

          const startDateObj = new Date(startDate.value);
          const endDateObj = new Date(endDate.value);
          const timeDiff = endDateObj.getTime() - startDateObj.getTime();
          const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Count the start date as well
          const newItem: CartItem = {
            vehicleType: selectedVehicleType.value,
            plate: selectedPlate.value,
            startDate: startDate.value,
            endDate: endDate.value,
            price: plate.price * diffDays,
          };
          cart.value.push(newItem);
          // Clear selections
          selectedVehicleType.value = '';
          selectedPlate.value = '';
          startDate.value = '';
          endDate.value = '';
          filteredPlates.value = [];
        }
      } else {
        dateError.value = 'Please select valid dates.';
      }
    };

    const removeFromCart = (index: number) => {
      cart.value.splice(index, 1);
    };

    const totalPrice = computed(() => {
      return cart.value.reduce((total, item) => total + item.price, 0);
    });

    const confirmOrder = () => {
      // Implementeer de bevestigingslogica
    };

    const cancelOrder = () => {
      // Implementeer de annuleringslogica
    };

    return {
      vehicleTypes,
      selectedVehicleType,
      filteredPlates,
      selectedPlate,
      startDate,
      endDate,
      minStartDate,
      dateError,
      cart,
      filterPlates,
      validateDates,
      addToCart,
      removeFromCart,
      totalPrice,
      confirmOrder,
      cancelOrder
    };
  }
});
</script>

<style scoped>
.available-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1c1c1c;
  color: white;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  overflow-y: auto; /* Allows vertical scrolling */
}

.filters, .plates, .dates, .cart {
  margin-bottom: 20px;
  width: 100%;
}

label {
  margin-right: 10px;
}

select, input[type="date"], button {
  margin: 10px 0;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
}

select {
  width: 100%;
}

button {
  cursor: pointer;
  background-color: #555;
}

button:hover {
  background-color: #777;
}

h2, h3 {
  margin-bottom: 10px;
}

.cart ul {
  list-style-type: none;
  padding: 0;
}

.cart li {
  background-color: #444;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart p {
  font-weight: bold;
  font-size: 1.2em;
}

.cart button {
  background-color: #ff4444;
}

.cart button:hover {
  background-color: #ff6666;
}

.error {
  color: red;
  margin-top: 10px;
}

button {
  margin: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s;
}

button:hover {
  background-color: white;
  color: red;
}
</style>


