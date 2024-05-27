<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AanbodPage"
})
</script>

<template>
  <div class="aboutcontent">
  <h2>Ons aanbod:</h2>

  <br>

  <ul>
    <li>Uitgebreide keuze:  We bieden een breed scala aan elektrische voertuigen, van auto's<br>
      en fietsen tot brommers, steps en zelfs golfkarretjes.</li>
    <br>
    <li>Duurzaam en efficiënt:  Elk voertuig in onze vloot is zorgvuldig geselecteerd om onze<br>
      hoge normen van milieuvriendelijkheid en efficiëntie te halen.</li>
    <br>
    <li>Betaalbaar en transparant:  Onze tarieven zijn helder en voordelig, waardoor elektrisch<br>
      rijden voor iedereen toegankelijk is.</li>
  </ul>

  <br>
    <br>

  <h2>Waarom ZIPP.E?</h2>

  <br>

  <uL>

    <li>Milieuvriendelijk:  Door elektrisch te rijden, draagt u bij aan de vermindering van<br>
      luchtvervuiling en CO2-uitstoot.</li>
    <br>
    <li>Comfortabel en stil:  Elektrische voertuigen bieden een comfortabele en geruisloze <br>
      rijervaring.</li>
    <br>
    <li>Eenvoudig en praktisch: Elektrisch laden is eenvoudig en er zijn steeds meer laadpalen<br>
      beschikbaar.</li>
  </uL>

  <br>

  <p>ZIPP.E: Uw partner in duurzame mobiliteit</p>

  <br>
  </div>
</template>

<style scoped>
.aboutcontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
}
</style>