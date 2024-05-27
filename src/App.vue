<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from 'vue-router';

export default {
  components: {
    Navigation,
    Footer,
    RouterView
  }
};
</script>

<template>
  <div class="app">
    <Navigation class="top"></Navigation>
    <main class="content">
      <RouterView></RouterView>
    </main>
    <Footer class="bottom"></Footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Zorgt ervoor dat de container de volledige hoogte van het viewport inneemt */
  overflow: hidden; /* Voorkomt scrollen */
}

.top {
  flex: 0 0 auto; /* Voorkomt dat de top bar groeit of krimpt */
}

.content {
  flex: 1; /* Zorgt ervoor dat de content de resterende ruimte inneemt */
  display: flex;
  align-items: center; /* Horizontale uitlijning in het midden */
  justify-content: center; /* Verticale uitlijning in het midden */
  overflow: hidden /* Zorgt voor scrollen binnen de content, indien nodig */
}

.bottom {
  flex: 0 0 auto; /* Voorkomt dat de footer groeit of krimpt */
}
</style>
