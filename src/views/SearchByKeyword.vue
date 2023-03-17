<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store/index.js';
import { useRoute } from 'vue-router';
import MealItems from '../components/MealItems.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals.data);
const route = useRoute();
const loading = computed(() => store.state.searchedMeals.loading);

function searchByKeyword() {
  if (keyword.value) {
    store.dispatch('setLoading', true);
    store.dispatch('searchByKeyword', keyword.value);
  }
}

onMounted(() => {
  keyword.value = route.params.keyword;
  if (keyword.value) {
    searchByKeyword();
  }
});
</script>

<template>
  <div class="p-8 pb-0">
    <input
      style="width: 100%"
      type="text"
      class="border-2 border-gray-200 rounded shadow-sm outline-none w-full p-2"
      placeholder="Search for meals by keyword"
      v-model="keyword"
      @change="searchByKeyword"
    />
  </div>
  <div v-if="loading === true" class="w-full flex mt-10 justify-center h-full">
    <LoadingSpinner />
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItems v-if="meals" v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    <h1 v-else class="text-xl text-center font-semibold">Nothing to display</h1>
  </div>
</template>
