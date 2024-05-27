<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBackground from "@/components/MainBackground.vue";
import MainBox from "@/components/MainBox.vue";
import ProfilePage from '@/components/PVPages/ProfilePage.vue';
import OrderHistoryPage from '@/components/PVPages/Bestellingen.vue';
import WelkomPage from "@/components/PVPages/WelkomPage.vue";

export default defineComponent({
  name: "ProfileView",
  components: {
    MainBox,
    MainBackground,
    ProfilePage,
    OrderHistoryPage,
    WelkomPage
  },
  setup() {
    const currentView = ref('WelkomPage');

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
  <div class="profile-page">
    <MainBackground class="background"></MainBackground>
    <MainBox class="box">
      <div class="profile-content">
        <nav>
          <a @click="switchToPage('ProfilePage')">Profiel</a>
          <p>|</p>
          <a @click="switchToPage('OrderHistoryPage')">Bestellingen</a>
        </nav>
        <component :is="currentView" />
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

.profile-page {
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

.profile-content {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  margin-right: 10px;
  padding: 10px 20px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.9);
  color: red;
}
</style>
