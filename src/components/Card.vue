<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Card"
})
</script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  width: 70%;
  height: auto;
  z-index: 1;
  padding: 20px;
  border-radius: 10px;
}
</style>