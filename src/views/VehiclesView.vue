<script lang="ts">
import { defineComponent } from 'vue';
import MainBackground from "@/components/MainBackground.vue";
import MainBox from "@/components/MainBox.vue";
import Container from "@/components/Container.vue";
import Vehicles from "@/components/VehiclesPages/Vehicles.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "VehiclesView",
  computed: {
    Vehicles(){
      return Vehicles
    }
  },
  components: {Vehicles, Container, MainBox, MainBackground, Card },
  data(){
    return{
      ArrayVehicleObject:[
        {VehicleTypeID: 1, merk: "Deloreon", type: "Alpha 5", prijs: 80, gewicht: 2000, seats: 2, batteryrange: 480, dimensies: "L 4,27 B 1,84 H 1,17", omschrijving: "Een elektrische sportauto combineert krachtige prestaties met milieuvriendelijke elektrische aandrijving."},
        {VehicleTypeID: 2, merk: "Honda", type: "E advance", prijs: 45, gewicht: 2000, seats: 4, batteryrange: 230, dimensies: "L 3,89 B 1,75 H 1,51", omschrijving: "Stap in de toekomst van mobiliteit met onze gewone elektrische auto. Milieuvriendelijk, efficiënt en uitgerust met geavanceerde technologieën, biedt hij een comfortabele en duurzame rijervaring voor dagelijks gebruik."},
        {VehicleTypeID: 3, merk: "Volkswagen", type: "ID Buzz Pro", prijs: 60, gewicht: 2500, seats: 6, batteryrange: 345, dimensies: "L 2,99 B 1,99 H 1,93", omschrijving: "Ontdek de groene revolutie in stedelijk transport met ons elektrische busje. Duurzaam, ruim en uitgerust met geavanceerde veiligheids- en connectiviteitsfuncties, biedt het een efficiënt en comfortabel alternatief voor traditionele vervoersmiddelen."},
        {VehicleTypeID: 4, merk: "Solidhub", type: "PC-2", prijs: 30, gewicht: 450, seats: 2, batteryrange: 90, dimensies: "L 2,85 B 1,10 H 1,80 ", omschrijving: "Geniet van een geruisloze en luxe rit op de golfbaan met onze elektrische golfkarren. Met comfortabele zitplaatsen en moderne functies, bieden ze een milieuvriendelijke en plezierige manier om te golfen."},
        {VehicleTypeID: 5, merk: "Ninebot", type: "T15E", prijs: 20, gewicht: 20, seats: 1, batteryrange: 70, dimensies: "L 1,21 B 0,63 H 1,19 ", omschrijving: "Navigeer moeiteloos door stedelijke straten met onze elektrische step. Compact, opvouwbaar en perfect voor korte afstanden, biedt het een handige en milieuvriendelijke manier van vervoer in de stad."},
        {VehicleTypeID: 6, merk: "La Souris", type: "CrossBoss ouxi V8", prijs: 20, gewicht: 25, seats: 1, batteryrange: 80, dimensies: "L 1,80 B 0,67 H 1,14", omschrijving: "Verken de stad op een nieuwe manier met onze elektrische fiets. Gemakkelijk trappen met elektrische ondersteuning maakt langere afstanden en heuvels een fluitje van een cent, terwijl je nog steeds geniet van de gezonde voordelen van fietsen."},
        {VehicleTypeID: 7, merk: "Honda", type: "SCe", prijs: 45, gewicht: 300, seats: 2, batteryrange: 150, dimensies: "L 2,13 B 0,74 H 1,45", omschrijving: "Ervaar de opwinding van rijden zonder uitstoot met onze elektrische motorfiets. Krachtig, stil en met geavanceerde technologieën, biedt het een duurzaam alternatief voor traditionele brandstofaangedreven motoren."},
      ]
    }
  }
});
</script>

<template>
  <div class="vehicle-page">
    <MainBackground class="background"></MainBackground>

    <div class="vehicle-content">
      <Card class="card">
        <Vehicles
          v-for="Vehicles in ArrayVehicleObject"
          v-bind:vehicles="Vehicles"
        ></Vehicles>
      </Card>
    </div>
  </div>
</template>

<style>
.vehicle-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: scroll;
  z-index: 1;
  color: black;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
}

.vehicle-content
{
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}
</style>
