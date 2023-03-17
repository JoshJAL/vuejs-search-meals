<script setup>
import Navbar from './Navbar.vue';
</script>

<template>
  <div class="h-full flex flex-col items-center">
    <Navbar />
    <main class="max-w-3xl mt-16 w-full h-full">
      <router-view />
    </main>
  </div>
</template>
