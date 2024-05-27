<template>
  <Card class="card">
    <div class="row">
      <div>
        <img src="../../assets/vehicle_1.png" height="400" width=auto/>
      </div>
      <div class="col">
        <h1>Deloreon</h1>
        <h1>Alpha 5</h1>
        <br>
        <h2>480 KM</h2>
        <br>
        <h2>2 seats</h2>
        <br>
        <h2>2.000 KG</h2>
        <br>
        <h2>L x 4,27, B x 1,84, H x 1,17</h2>
      </div>
    </div>
    <h3>Een elektrische sportauto combineert krachtige prestaties met milieuvriendelijke elektrische aandrijving.</h3>
    <br>
    <h1>Huur nu voor maar 80 euro per dag!</h1>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../Card.vue';

export default defineComponent({
  name: "Sportscar",
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
