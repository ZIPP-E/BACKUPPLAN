<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainBox'
});
</script>

<template>
  <div class="mainbox">
    <slot></slot>
  </div>
</template>

<style scoped>
.mainbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.5);
  width: 80%;
  height: 100%;
}
</style>
