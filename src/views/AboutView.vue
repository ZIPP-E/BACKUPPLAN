<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBackground from "@/components/MainBackground.vue";
import MainBox from "@/components/MainBox.vue";
import AboutPage from "@/components/AbtPages/AboutPage.vue";
import AanbodPage from "@/components/AbtPages/AanbodPage.vue";
import TeamPage from "@/components/AbtPages/TeamPage.vue";

export default defineComponent({
  name: "ProfileView",
  components: {
    AboutPage,
    MainBox,
    MainBackground,
    AanbodPage,
    TeamPage
  },
  setup() {
    const currentView = ref('AboutPage');
    return {
      currentView
    };
  }
});
</script>

<template>
  <div class="about-page">
    <MainBackground class="background"></MainBackground>
    <MainBox class="box"></MainBox>

    <div class="about-content">
      <nav>
        <a @click="currentView = 'AboutPage'">About</a>
        <p>|</p>
        <a @click="currentView = 'AanbodPage'">Aanbod</a>
        <p>|</p>
        <a @click="currentView = 'TeamPage'">Team</a>
      </nav>
      <component :is="currentView" />

    </div>
  </div>
</template>

<style scoped>

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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

.about-page {
  display: flex;
  justify-content: center;
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
  height: 100%;
}

.about-content
{
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}

</style>