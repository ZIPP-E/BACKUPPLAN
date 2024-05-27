<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_3.png" height="200" width=auto/>
      </div>
      <div class="col">
        <h1>Volkswagen</h1>
        <h1>ID Buzz Pro</h1>
        <br>
        <h2>345 KM</h2>
        <br>
        <h2>6 seats</h2>
        <br>
        <h2>2.500 KG</h2>
        <br>
        <h2>L x 2,99, B x 1,99, H x 1,93</h2>
      </div>
    </div>
    <h3>Ontdek de groene revolutie in stedelijk transport met ons elektrische busje. Duurzaam, ruim en uitgerust met geavanceerde veiligheids- en connectiviteitsfuncties, biedt het een efficiënt en comfortabel alternatief voor traditionele vervoersmiddelen.</h3>
    <br>
    <h1>Huur nu voor maar 60 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Van",
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
