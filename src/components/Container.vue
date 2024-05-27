<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Container"
})
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(128, 128, 128, 0.9);
  width: 80%;
  max-width: 600px;
  height: auto;
  z-index: 1;
  padding: 20px;
  border-radius: 10px;

}
</style>