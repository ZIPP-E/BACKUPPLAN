<template>
  <div class="order-history-page">
    <MainBox class="box">
      <div class="order-history">
        <h2>Oude Bestellingen</h2>
        <ul class="order-list">
          <!-- Hier komen de bestellingen -->
          <li class="order-item" v-for="order in orders" :key="order.OrderLineID">
            <div class="order-info">
              <h3>Bestelling #{{ order.OrderID }}</h3>
              <p>Voertuig ID: {{ order.VehicleID }}</p>
              <p>Hoeveelheid: {{ order.Amount }}</p>
              <p>Startdatum: {{ order.StartDate }}</p>
              <p>Einddatum: {{ order.EndDate }}</p>
            </div>
          </li>
        </ul>
      </div>
    </MainBox>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import MainBox from "@/components/MainBox.vue";

export default {
  name: 'OrderHistoryPage',
  components: { MainBox },
  setup() {
    const orders = ref([]);

    // Mock data voor oude bestellingen
    const fetchOrders = () => {
      orders.value = [
        { OrderLineID: 1, OrderID: 101, Amount: 2, VehicleID: 1, StartDate: '2023-05-10', EndDate: '2023-05-12' },
        { OrderLineID: 2, OrderID: 102, Amount: 1, VehicleID: 3, StartDate: '2023-05-15', EndDate: '2023-05-18' },
        { OrderLineID: 3, OrderID: 103, Amount: 3, VehicleID: 2, StartDate: '2023-05-20', EndDate: '2023-05-22' },
      ];
    };

    onMounted(() => {
      fetchOrders();
    });

    return {
      orders,
    };
  }
};
</script>


<style scoped>
.order-history-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #1c1c1c; /* Donkere achtergrondkleur */
  min-height: 100vh;
  overflow: hidden; /* Voorkomt dat de pagina scrolt */
}

.box {
  width: 100%;
  background-color: #333; /* Donkere achtergrondkleur voor de box */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-height: 80vh; /* Beperkt de hoogte van de box */
  overflow: auto; /* Zorgt voor een scrollbar als de inhoud te groot is */
}

.order-history {
  margin-top: 20px;
  color: white; /* Witte tekstkleur voor leesbaarheid */
}

.order-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.order-item {
  background-color: #444; /* Donkere achtergrondkleur voor order items */
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
}

.order-info h3 {
  margin: 0;
  font-size: 1.2em;
  color: #fff; /* Witte tekstkleur voor leesbaarheid */
}

.order-info p {
  margin: 5px 0;
  color: #ddd; /* Lichtere tekstkleur voor contrast */
}
</style>



