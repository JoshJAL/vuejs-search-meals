<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItems from '../components/MealItems.vue';

const meals = computed(() => store.state.mealsByIngredient);
const route = useRoute();

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>

<template>
  <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else class="flex justify-center p-8 text-xl font-semibold">There are no meals</div>
</template>
