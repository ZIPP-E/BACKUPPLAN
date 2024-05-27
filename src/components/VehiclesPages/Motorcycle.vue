<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_7.png" height="200" width=auto/>
      </div>
      <div class="col">
        <h1>Honda</h1>
        <h1>SCe</h1>
        <br>
        <h2>150 KM</h2>
        <br>
        <h2>2 seats</h2>
        <br>
        <h2>300 KG</h2>
        <br>
        <h2>L x 2,13, B x 0,74, H x 1,45</h2>
      </div>
    </div>
    <h3>Ervaar de opwinding van rijden zonder uitstoot met onze elektrische motorfiets. Krachtig, stil en met geavanceerde technologieën, biedt het een duurzaam alternatief voor traditionele brandstofaangedreven motoren.</h3>
    <br>
    <h1>Huur nu voor maar 45 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Motorcycle",
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
