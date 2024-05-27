<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_5.png" height="200" width=auto/>
      </div>
      <div class="col">
        <h1>Ninebot</h1>
        <h1>T15E</h1>
        <br>
        <h2>70 KM</h2>
        <br>
        <h2>1 seat</h2>
        <br>
        <h2>20 KG</h2>
        <br>
        <h2>L x 1,21, B x 0,63, H x 1,19</h2>
      </div>
    </div>
    <h3>Navigeer moeiteloos door stedelijke straten met onze elektrische step. Compact, opvouwbaar en perfect voor korte afstanden, biedt het een handige en milieuvriendelijke manier van vervoer in de stad.</h3>
    <br>
    <h1>Huur nu voor maar 20 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Scooter",
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
