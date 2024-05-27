<script lang="ts">
import {defineComponent} from 'vue'
import MainBackground from "@/components/MainBackground.vue";
import MainBox from "@/components/MainBox.vue";

export default defineComponent({
  name: "ContactView",
  components: {MainBox, MainBackground}
})
</script>

<template>
  <div class="contact-page">
    <MainBackground class="background"></MainBackground>
    <MainBox class="box">
    <div class="contact-content">

      <h2>Adresgegevens :</h2>

      <br>

      <p>ZIPP.E</p>

      <p>Adres :		Elfde-Liniestraat 26</p>

      <p>3500 Hasselt</p>

      <p>E-mail :		ZIPPE@info.be</p>

      <p>Telefoonnummer :	+32 12345678</p>

      <br>

      <img src="../assets/map.png" height="200" width="auto"/></div>

    </MainBox>
  </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  align-items: center;
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

.contact-content
{
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}

.contact-content h2{
  font-weight: bold;
}
</style>