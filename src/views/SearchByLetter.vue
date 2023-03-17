<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import MealItems from '../components/MealItems.vue';
import store from '../store';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();
const loading = computed(() => store.state.searchedMeals.loading);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  if (route.params.letter) {
    store.dispatch('searchMealsByLetter', route.params.letter);
  }
});
</script>

<template>
  <div class="flex justify-center gap-2 mt-3 flex-wrap md:px-0 px-6">
    <router-link
      class="text-2xl md:text-base md:p-0 p-1"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      >{{ letter }}</router-link
    >
  </div>

  <div v-if="loading === true" class="w-full flex mt-10 justify-center h-full">
    <LoadingSpinner />
  </div>
  <div v-else-if="loading === false && meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <div v-else class="flex justify-center mt-5" v-show="route.params.letter">
    <h1 class="text-lg font-semibold">Sorry! There are no meals to display for "{{ route.params.letter }}".</h1>
  </div>
</template>
