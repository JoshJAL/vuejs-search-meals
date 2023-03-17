export function setSearchedMeals(state, meals) {
  state.searchedMeals.loading = true;
  state.searchedMeals.data = meals;
  state.searchedMeals.loading = false;
}

export function setNavOpen(state) {
  state.navOpen.open = !state.navOpen.open;
}

export function setClickHome(state) {
  state.navOpen.open = false;
}

export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals;
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals;
}
