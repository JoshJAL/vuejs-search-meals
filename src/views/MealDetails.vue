<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import DefaultButton from '../components/DefaultButton.vue';
import YoutubeButton from '../components/YoutubeButton.vue';

const meal = ref({});
const route = useRoute();

onMounted(() => {
  route.params.id;
  axiosClient.get('/lookup.php?i=' + route.params.id).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<template>
  <div class="px-5 md:px-0">
    <h1 class="text-3xl md:text-5xl font-bold my-5">{{ meal.strMeal }}</h1>
    <div class="flex items-center">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-lg shadow-lg border border-gray-300" />
    </div>
    <div class="mt-3 flex justify-between">
      <YoutubeButton :text="'Youtube'" :link="meal.strYoutube" v-show="meal.strYoutube" />
      <DefaultButton :text="'Source'" :link="meal.strSource" v-show="meal.strSource" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div><strong class="font-semibold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-semibold">Type:</strong> {{ meal.strArea }}</div>
      <div class="flex flex-wrap break-words">
        <strong class="font-semibold">Tags:</strong>
        <ul class="pl-2">
          <li v-if="meal.strTags" v-for="(element, index) of meal.strTags.split(',')">
            {{ element }}
          </li>
          <li v-else>None</li>
        </ul>
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-semibold my-3">Instructions:</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="grid gird-cols-1 md:grid-cols-2 pb-4">
      <div>
        <h2 class="text-2xl font-semibold my-3">Ingredients:</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)">
            <li v-if="meal['strIngredient' + (index + 1)]">
              {{ `${index + 1}.` }} {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold my-3">Measurements:</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)">
            <li v-if="meal['strMeasure' + (index + 1)]">
              {{ `${index + 1}.` }} {{ meal['strIngredient' + (index + 1)] }} - {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
