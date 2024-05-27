<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TeamPage"
})
</script>

<template>
  <div class="aboutcontent">
  <h2>Ons team staat klaar om u te helpen bij het kiezen van de perfecte<br>
    elektrische oplossing voor uw behoeften. We bieden u:</h2>

  <br>

  <uL>

    <li>Persoonlijk advies: We helpen u graag bij het vinden van het juiste voertuig voor uw budget<br>
      en rijstijl.</li>
    <br>
    <li>Flexibele huurcontracten: We bieden verschillende huurcontracten aan, van korte termijn tot<br>
      langlopende opties.</li>
    <br>
    <li>Uitgebreide service: We bieden onderhoud en reparaties aan alle voertuigen in onze vloot.</li>

  </uL>

    <br>
    <br>

  <p>Maak de stap naar een groenere toekomst met ZIPP.E!<br>
    <br>
  Bezoek ons in Hasselt en ontdek hoe u kunt bijdragen aan een schonere wereld.<br>
    <br>
  ZIPP.E: Samen voor een betere toekomst.</p>

    <br>
    <br>

  <h1>Rijd groen, rijd ZIPP.E!</h1>
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