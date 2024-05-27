<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MainBackground"
})
</script>

<template>
  <div class="mainbackground-view">
    <!-- Content for HomeView, if any -->
  </div>
</template>

<style scoped>
@media (min-width: 1024px)
{
  .mainbackground-view {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.mainbackground-view
{
  height: 100%;
  width: 100%;
  background-image: url('@/assets/AppHeaderBg.jpeg');
  background-size: cover;
  background-position: center;
}
</style>