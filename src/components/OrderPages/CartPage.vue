<template>
  <div class="cart-page">
    <MainBackground class="background"></MainBackground>
    <MainBox class="box">
      <div class="cart-content">
        <Available></Available>
      </div>
    </MainBox>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import MainBox from "@/components/MainBox.vue";
import MainBackground from "@/components/MainBackground.vue";
import Available from "@/components/OrderPages/Available.vue";

export default defineComponent({
  name: 'CartPage',
  components: {
    MainBackground,
    MainBox,
    Available
  },
  setup() {
    const currentView = ref('Cart');

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

.cart-page {
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

.cart-content {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
nav {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}
</style>
