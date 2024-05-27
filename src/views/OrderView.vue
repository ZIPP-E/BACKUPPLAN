<script lang="ts">
import {defineComponent, ref} from 'vue'
import MainBackground from "@/components/MainBackground.vue";
import MainBox from "@/components/MainBox.vue";
import Sportscar from '@/components/VehiclesPages/Sportscar.vue';
import Car from '@/components/VehiclesPages/Car.vue';
import Van from '@/components/VehiclesPages/Van.vue';
import Golfcart from '@/components/VehiclesPages/Golfcart.vue';
import Scooter from '@/components/VehiclesPages/Scooter.vue';
import Bicycle from '@/components/VehiclesPages/Bicycle.vue';
import Motorcycle from '@/components/VehiclesPages/Motorcycle.vue';

export default defineComponent({
  name: "OrderView",
  components: {
    MainBox,
    MainBackground,
    Sportscar,
    Car,
    Van,
    Golfcart,
    Scooter,
    Bicycle,
    Motorcycle
},
setup() {
    const currentView = ref('Sportscar');

    const switchToPage = (pageName: string) => {
    currentView.value = pageName;
    };

    return {
    currentView,
    switchToPage
    };
  }
});
</script>

<template>
<div class="orderview-page">
  <MainBackground class="background"></MainBackground>
  <MainBox class="box">
    <div class="orderview-content">
      <nav>
        <a @click="switchToPage('Sportscar')">Sportscar</a>
        <p>|</p>
        <a @click="switchToPage('Car')">Car</a>
        <p>|</p>
        <a @click="switchToPage('Van')">Van</a>
        <p>|</p>
        <a @click="switchToPage('Golfcart')">Golfcart</a>
        <p>|</p>
        <a @click="switchToPage('Scooter')">Scooter</a>
        <p>|</p>
        <a @click="switchToPage('Bicycle')">Bicycle</a>
        <p>|</p>
        <a @click="switchToPage('Motorcycle')">Motorcycle</a>
      </nav>
      <component :is="currentView" />

    <router-link to="cart">
      <button>Check Availabity</button>
    </router-link>
    </div>
  </MainBox>
</div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.5s ease;
  cursor: pointer;
}

nav a:hover {
  color: red;
}

nav p {
  margin: 0 10px;
  color: white;
}

.orderview-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
}

.orderview-content {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin: 20px;
  padding: 10px 20px;
  background-color: #00aa55;
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