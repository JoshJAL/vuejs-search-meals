<script setup>
import YoutubeButton from './YoutubeButton.vue';
import DefaultButton from './DefaultButton.vue';

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="bg-white shadow rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-64 w-full object-cover" />
    </router-link>
    <div class="px-3">
      <h3 class="py-3 font-bold">{{ meal.strMeal }}</h3>
      <div class="flex gap-2 items-center py-3 justify-between">
        <YoutubeButton :text="'Youtube'" :link="meal.strYoutube" v-show="meal.strYoutube" />
        <DefaultButton :text="'Source'" :link="meal.strSource" v-show="meal.strSource" />
      </div>
    </div>
  </div>
</template>
