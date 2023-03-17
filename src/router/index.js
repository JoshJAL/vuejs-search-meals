import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SearchByKeyword from '../views/SearchByKeyword.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import MealDetails from '../views/MealDetails.vue';
import MealByIngredient from '../views/MealByIngredient.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/by-keyword/:keyword?',
        name: 'byKeyword',
        component: SearchByKeyword
      },
      {
        path: '/ingredients/',
        name: 'ingredients',
        component: SearchByIngredients
      },
      {
        path: '/by-ingredient/:ingredient',
        name: 'byIngredient',
        component: MealByIngredient
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: SearchByLetter
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
