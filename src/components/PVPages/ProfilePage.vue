<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBox from "@/components/MainBox.vue";
import EditProfile from "@/components/PVPages/EditProfile.vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "ProfilePage",
  components: { MainBox, EditProfile },
  setup() {
    const router = useRouter(); // Router initialiseren

    const changeView = ref('ProfilePage'); // Standaardweergave instellen op "ProfilePage"

    const goToEditProfile = () => {
      router.push('/profile/edit'); // Wijzig de weergave naar "EditProfile" wanneer de knop wordt geklikt
    };

    // Dummy data voor gebruikersinformatie
    const Users = ref({
      UserName: 'JohnDoe',
      Email: 'john.doe@example.com',
      FirstName: 'John',
      LastName: 'Doe',
      Sex: 'Male',
      LicenseNumber: 'D12345678',
      Birthdate: '1990-01-01',
      InsurenceNumber: 'INS123456',
      StreetName: 'Main St',
      PaymentMethod: 'Credit Card',
      StreetNumber: '123',
      LicenseType: 'Full',
      Country: 'Netherlands',
      PhoneNumber: '123-456-7890',
      City: 'Amsterdam',
      ZipCode: '1234 AB'
    });

    return {
      changeView,
      goToEditProfile, // Retourneer de functie zodat deze kan worden gebruikt in de template
      Users // Retourneer de dummy data zodat deze kan worden gebruikt in de template
    };
  }
});
</script>

<template>
  <MainBox class="box"></MainBox>
  <div v-if="changeView === 'ProfilePage'" class="profile-pagina">
    <h1>Profiel pagina</h1>
    <br>
    <div class="row">
      <div class="col">
        <p>Username: </p>
        <p>Email: </p>
        <p>FirstName: </p>
        <p>LastName: </p>
        <p>Sex:</p>
        <p>DriverLicense Number:</p>
        <p>Birthdate:</p>
        <p>Insurence Number:</p>
      </div>
      <div class="col">
        <p>{{ Users.UserName }}</p>
        <p>{{ Users.Email }}</p>
        <p>{{ Users.FirstName }}</p>
        <p>{{ Users.LastName }}</p>
        <p>{{ Users.Sex }}</p>
        <p>{{ Users.LicenseNumber }}</p>
        <p>{{ Users.Birthdate }}</p>
        <p>{{ Users.InsurenceNumber }}</p>
      </div>
      <div class="col">
        <p>StreetName:</p>
        <p>Payment Method:</p>
        <p>StreetNumber:</p>
        <p>License Type:</p>
        <p>Land:</p>
        <p>Phone Number:</p>
        <p>City:</p>
        <p>Zip Code:</p>
      </div>
      <div class="col">
        <p>{{ Users.StreetName }}</p>
        <p>{{ Users.PaymentMethod }}</p>
        <p>{{ Users.StreetNumber }}</p>
        <p>{{ Users.LicenseType }}</p>
        <p>{{ Users.Country }}</p>
        <p>{{ Users.PhoneNumber }}</p>
        <p>{{ Users.City }}</p>
        <p>{{ Users.ZipCode }}</p>
      </div>
    </div>
    <div id="button">
      <button id="edit" @click="goToEditProfile">Edit</button>
    </div>
  </div>

  <div v-if="changeView === 'EditProfile'" class="editprofile-pagina">
    <EditProfile />
  </div>
</template>

<style scoped>
.profile-pagina {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex: 1;
}

.col{
  margin: 10px;
}

#button {
  display: flex;
  align-self: center;
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