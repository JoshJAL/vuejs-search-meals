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
  setLoading({ commit }, true);
  axiosClient.get('search.php?f=' + letter).then(({ data }) => {
    commit('setMealsByLetter', data.meals);
    setLoading({ commit }, false);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  setLoading({ commit }, true);

  axiosClient.get('filter.php?i=' + ingredient).then(({ data }) => {
    commit('setMealsByIngredient', data.meals);
  });
  setLoading({ commit }, false);
}

export function setLoading({ commit }, loading) {
  commit('setLoading', loading);
}
