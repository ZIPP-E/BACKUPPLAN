<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Vehicles",
  props: {
    vehicles: Object
  }
})
</script>

<template>
  <div class="rowview">
    <div class="rowview">
    <img v-bind:src="'/src/assets/Vehicle_'+ vehicles.VehicleTypeID +'.png'" height="157" width="auto" alt="poes"/>
    </div>
    <div class="colview">
    <div class="rowview">
      <div class="colview">
        <p>Merk:</p>
        <p>Type:</p>
        <p>Seats:</p>
        <p>Batteryrange:</p>
      </div>
      <div class="colview">
        <p>{{vehicles.merk}}</p>
        <p>{{vehicles.type}}</p>
        <p>{{vehicles.seats}}</p>
        <p>{{vehicles.batteryrange}}</p>
      </div>
       <div class="colview">
        <p>Dimensies:</p>
        <p>Gewicht:</p>
        <p>Prijs:</p>
      </div>
      <div class="colview">
        <p>{{vehicles.dimensies}}</p>
        <p>{{vehicles.gewicht}}</p>
        <p>{{vehicles.prijs}}</p>
      </div>
    </div>
    <div class="colview">
      <p>Omschrijving:</p>
      <p>{{vehicles.omschrijving}}</p>
    </div>
    </div>
  </div>
<hr>

  <div>



  </div>
</template>

<style scoped>

.rowview{
  display: flex;
  flex-direction: row;
}

.rowview img{
  display: flex;
  align-self: center;
}

.colview{
  display: flex;
  flex-direction: column;
}

</style>