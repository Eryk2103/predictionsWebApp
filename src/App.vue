<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav></Nav>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.main{
  padding: 0 1em;
}
</style>

