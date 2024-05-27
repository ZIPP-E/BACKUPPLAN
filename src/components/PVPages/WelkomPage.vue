<template>
  <div class="welkom-page">
    <MainBox class="box"></MainBox>
    <div class="welkom-content">
      <img src="@/assets/welcome.png" alt="Welcome Image"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainBox from "@/components/MainBox.vue";

export default defineComponent({
  name: "WelkomPage",
  components: { MainBox }
});
</script>

<style scoped>
.welkom-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.welkom-content {
  text-align: center;
  margin-top: 20px;
}

.welkom-content img[src$="welcome.png"] {
  max-width: 600px;
}

.welkom-content h2 {
  font-size: 100px;
}

</style>
