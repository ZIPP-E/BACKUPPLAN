<template>
  <div class="home-view">
    <MainBackground class="background"></MainBackground>
    <div class="maingreenbackground" :class="{ 'hide': !showMainGreenBackground }">
      <div class="home-content">
        <h1>ZIPPE</h1>
        <h1>Drive Green, drive ZIPPE</h1>
        <p>Maak van groen rijden een gewoonte en ervaar de voordelen!</p>
        <router-link to="/order">
          <button @click="hideMainGreenBackground">Get Started</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainBackground from "@/components/MainBackground.vue";

export default {
  name: 'HomeView',
  components: {MainBackground},
  data() {
    return {
      showMainGreenBackground: true
    };
  },
  methods: {
    hideMainGreenBackground() {
      this.showMainGreenBackground = false;
    }
  }
};
</script>

<style>
.maingreenbackground {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 200px;
  padding: 100px;
  width: 100%;
  height: 100%;
}

.maingreenbackground::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 110%;
  background: linear-gradient(157deg, #00aa55 50%, transparent 50%);
  opacity: 1;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.maingreenbackground.hide::before {
  opacity: 0;
}

.home-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden; /* Voorkomt scrollen */
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.home-content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
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
