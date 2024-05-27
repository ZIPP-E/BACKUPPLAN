<script lang="ts">
import {defineComponent} from 'vue'
import {RouterLink} from "vue-router";

export default defineComponent({
  name: "Footer",
  components: {RouterLink}
})
</script>

<template>
<div class="footer">
  <RouterLink to="/vehicles">Vehicles</RouterLink>
  <p>|</p>
  <RouterLink to="/about">About</RouterLink>
  <p>|</p>
  <RouterLink to="/contact">Contact</RouterLink>
</div>
</template>

<style scoped>
.footer{
  padding: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: #00aa55;
}
</style>