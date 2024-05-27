<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_2.png" height="200" width=auto alt="car"/>
      </div>
      <div class="col">
        <h1>Honda</h1>
        <h1>E advance</h1>
        <br>
        <h2>230 KM</h2>
        <br>
        <h2>4 seats</h2>
        <br>
        <h2>2.000 KG</h2>
        <br>
        <h2>L x 4,27, B x 1,84, H x 1,17</h2>
      </div>
    </div>
    <h3>Stap in de toekomst van mobiliteit met onze gewone elektrische auto. Milieuvriendelijk, efficiënt en uitgerust met geavanceerde technologieën, biedt hij een comfortabele en duurzame rijervaring voor dagelijks gebruik.</h3>
    <br>
    <h1>Huur nu voor maar 45 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Car",
  components: { Card },
})
</script>

<style scoped>
.card
{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 6px 6px 4px rgba(255, 255, 255, 0.5);
}
.row{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
}
</style>
