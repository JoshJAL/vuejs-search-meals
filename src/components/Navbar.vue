<script setup>
import store from '../store';

function openNav() {
  store.dispatch('openNav', store.state.navOpen.open);
}

function clickHome() {
  store.dispatch('clickHome');
}
</script>

<template>
  <header class="bg-white shadow-md flex items-center justify-center w-full h-16 fixed">
    <div class="max-w-3xl flex justify-between items-stretch w-full h-full relative">
      <router-link @click="clickHome" class="flex items-center h-full px-5" :to="{ name: 'Home' }">
        <div class="h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="orange">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"
            />
          </svg>
        </div>
      </router-link>
      <!-- desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <router-link
          :to="{ name: 'byKeyword' }"
          class="px-2 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="px-2 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="px-2 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
        >
          Meals By Ingredients
        </router-link>
      </div>

      <!-- Mobile Nav -->
      <div class="h-full flex md:hidden items-center px-5 justify-center">
        <div v-show="store.state.navOpen.open === false" class="h-6 w-6 cursor-pointer" @click="openNav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <div v-show="store.state.navOpen.open === true" class="h-9 w-6 cursor-pointer" @click="openNav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
        </div>
      </div>
      <div
        v-show="store.state.navOpen.open === true"
        class="gap-6 bg-orange-400 absolute right-0 top-16 p-4 h-screen shadow-2xl md:hidden"
      >
        <div class="flex flex-col items-start gap-6">
          <router-link
            @click="openNav"
            :to="{ name: 'byKeyword' }"
            class="p-3 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
          >
            Search Meals
          </router-link>
          <router-link
            @click="openNav"
            :to="{ name: 'byLetter' }"
            class="p-3 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
          >
            Meals By Letter
          </router-link>
          <router-link
            @click="openNav"
            :to="{ name: 'ingredients' }"
            class="p-3 h-full hover:bg-orange-200 flex items-center transition-all duration-300 ease-in-out"
          >
            Meals By Ingredients
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
