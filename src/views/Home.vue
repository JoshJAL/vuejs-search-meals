<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import MealItems from '../components/MealItems.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const meals = ref([]);

// The API had a paywall behind making a request for multiple random items so I just made the request 10 times
// Sorry for pop in
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get('random.php').then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>

<template>
  <div v-if="meals.length < 10" class="w-full flex items-center justify-center h-full">
    <LoadingSpinner />
  </div>
  <div v-else class="flex flex-col p-8 pt-4">
    <h1 class="text-4xl font-semibold mb-4">Try something random!</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
