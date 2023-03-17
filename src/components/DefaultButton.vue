<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  link: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  }
});

function openLink(link) {
  window.open(link);
}
</script>

<template>
  <button
    @click="($event) => openLink(link)"
    class="px-3 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out"
  >
    {{ text }}
  </button>
</template>
