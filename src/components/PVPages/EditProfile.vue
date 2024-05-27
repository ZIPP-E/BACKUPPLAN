<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import MainBox from "@/components/MainBox.vue";
import MainBackground from "@/components/MainBackground.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "EditProfile",
  components: {MainBackground, MainBox, Card },
  setup() {
    const router = useRouter(); // Vue Router gebruiken

    const user = ref({
      UserName: 'JohnDoe',
      Email: 'johndoe@example.com',
      FirstName: 'John',
      LastName: 'Doe',
      Sex: 'Male',
      LicenseNumber: 'ABC123456',
      Birthdate: '1990-01-01',
      InsuranceNumber: 'INS123456',
      StreetName: 'Main Street',
      PaymentMethod: 'Credit Card',
      StreetNumber: '123',
      LicenseType: 'Type B',
      Country: 'USA',
      PhoneNumber: '123-456-7890',
      City: 'New York',
      ZipCode: '10001'
    });

    const currentView = ref('EditProfile'); // Standaard currentView instellen
    let previousView = ''; // Variabele om de vorige currentView op te slaan

    const switchView = (view: string) => {
      previousView = currentView.value; // Huidige view opslaan als vorige view
      currentView.value = view; // CurrentView bijwerken naar nieuwe view
    };

    const cancelEdit = () => {
      // Terug naar vorige pagina met Vue Router
      router.back();
    };

    return {
      user,
      currentView,
      switchView,
      cancelEdit
    };
  }
});

</script>

<template>
  <MainBackground class="background"></MainBackground>
  <MainBox class="box"></MainBox>
  <Card>
  <div class="editprofile-pagina">
    <h1>Wijzig Profiel</h1>
    <br>
    <div id="lijst">
      <div id="links">
        <div class="links_links">
          <label>Username:</label>
          <label>Email: </label>
          <label>FirstName:</label>
          <label>LastName:</label>
          <label>Sex:</label>
          <label>DriverLicense Number:</label>
          <label>Birthdate:</label>
          <label>Insurance Number:</label>
        </div>
        <div class="links_rechts">
          <input v-model="user.UserName" type="text" />
          <input v-model="user.Email" type="email" />
          <input v-model="user.FirstName" type="text" />
          <input v-model="user.LastName" type="text" />
          <input v-model="user.Sex" type="text" />
          <input v-model="user.LicenseNumber" type="text" />
          <input v-model="user.Birthdate" type="date" />
          <input v-model="user.InsuranceNumber" type="text" />
        </div>
      </div>
      <div id="rechts">
        <div class="rechts_links">
          <label>StreetName:</label>
          <label>Payment Method:</label>
          <label>StreetNumber:</label>
          <label>License Type:</label>
          <label>Land:</label>
          <label>Phone Number:</label>
          <label>City:</label>
          <label>Zip Code:</label>
        </div>
        <div class="rechts_rechts">
          <input v-model="user.StreetName" type="text" />
          <input v-model="user.PaymentMethod" type="text" />
          <input v-model="user.StreetNumber" type="text" />
          <input v-model="user.LicenseType" type="text" />
          <input v-model="user.Country" type="text" />
          <input v-model="user.PhoneNumber" type="tel" />
          <input v-model="user.City" type="text" />
          <input v-model="user.ZipCode" type="text" />
        </div>
      </div>
    </div>
    <div id="button">
      <button id="confirm">Confirm</button>
      <button id="cancel" @click="cancelEdit">Cancel</button>
    </div>
  </div>
  </Card>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  width: 80%;
  height: 100%; /* Pas dit aan naar wens */
}


.editprofile-pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 2;
}

#lijst {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#links, #rechts {
  display: flex;
  flex-direction: row;
}

.links_links, .rechts_links, .links_rechts, .rechts_rechts {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 14px;
  margin-left: 60px;
  color: white;
}

input {
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

#button {
  margin-top: 20px;
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
