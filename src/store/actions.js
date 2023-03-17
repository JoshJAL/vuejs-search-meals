import axiosClient from '../axiosClient';

export function searchByKeyword({ commit }, keyword) {
  axiosClient.get('search.php?s=' + keyword).then(({ data }) => {
    commit('setSearchedMeals', data.meals);
  });
}

export function openNav({ commit }, open) {
  commit('setNavOpen', open);
}

export function clickHome({ commit }) {
  commit('setClickHome');
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get('search.php?f=' + letter).then(({ data }) => {
    commit('setMealsByLetter', data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get('filter.php?i=' + ingredient).then(({ data }) => {
    commit('setMealsByIngredient', data.meals);
  });
}
