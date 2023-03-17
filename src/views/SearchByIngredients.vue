<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([]);
const keyword = ref('');
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((ingredient) => {
    return ingredient.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

<template>
  <div class="p-8 flex flex-col w-full">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <input
      style="width: 100%"
      type="text"
      class="border-2 border-gray-200 rounded shadow-sm outline-none w-full p-2 mb-4"
      placeholder="Search for Ingredients"
      v-model="keyword"
      @change="searchByKeyword"
    />
    <router-link
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow-lg inline-block"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
