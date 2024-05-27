<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_4.png" height="200" width=auto/>
      </div>
      <div class="col">
        <h1>Solidhub</h1>
        <h1>PC-2</h1>
        <br>
        <h2>90 KM</h2>
        <br>
        <h2>2 seats</h2>
        <br>
        <h2>450 KG</h2>
        <br>
        <h2>L x 2,85, B x 1,10, H x 1,80</h2>
      </div>
    </div>
    <h3>Geniet van een geruisloze en luxe rit op de golfbaan met onze elektrische golfkarren. Met comfortabele zitplaatsen en moderne functies, bieden ze een milieuvriendelijke en plezierige manier om te golfen.</h3>
    <br>
    <h1>Huur nu voor maar 30 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Golfcart",
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
