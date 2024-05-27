<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutPage"
})
</script>

<template>
  <div class="aboutcontent">
  <h1>ZIPP.E: Uw sleutel tot groene mobiliteit in Hasselt</h1>

  <br>

  <p>
    Welkom bij ZIPP.E, uw poort naar een duurzamere toekomst in Hasselt en omgeving. <br>
    Sinds 2024 zijn we toegewijd aan het bevorderen van een schonere wereld door middel <br>
    van elektrische mobiliteit.
  </p>

    <br>
    <br>

  <h2>Onze missie:</h2>
  <br>

  <p>
    Bijdragen aan de Duurzame Ontwikkelingsdoelstellingen (SDG's) van de Verenigde Naties, met name:
  </p>

  <br>
  <ul>
    <li>SDG 3:  Goede gezondheid en welzijn: Door luchtvervuiling te verminderen, dragen <br>
                we bij aan een betere gezondheid voor iedereen.</li>
    <br>
    <li>SDG 11: Duurzame steden en gemeenschappen: Elektrische voertuigen maken onze steden <br>
                schoner en leefbaarder.</li>
    <br>
    <li>SDG 13: Klimaatactie: Door CO2-uitstoot te verminderen, helpen we de strijd tegen <br>
                klimaatverandering aan te pakken.</li>
    <br>
    <li>SDG 17: Partnerschap voor de doelstellingen: We werken samen met overheden, bedrijven <br>
                en andere organisaties om duurzame mobiliteit voor iedereen te realiseren.</li>

  </ul>

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