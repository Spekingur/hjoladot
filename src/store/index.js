import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bikeList: [],
    gettingInitialData: false,
  },
  mutations: {
    setBikeList(state, list) {
      state.bikeList = list;
    },
    addToBikeList(state, bike) {
      state.bikeList.push(bike);
    },
    // ADMIN ONLY
    removeFromBikeList(state, index) {
      state.bikeList.splice(index, 1);
    },
    hideInBikeList(state, index) {
      state.bikeList[index].active = false;
    },
    updateGettingInitialData(state, status) {
      state.gettingInitialData = status;
    },
  },
  actions: {
    getInitialData: ({ commit }) => {
      commit('updateGettingInitialData', true);
      const mockData = [
        {
          uuid: '123-123',
          title: 'Mongoose',
          description: 'Mongoose found',
          dateFound: Date.now(),
          dateLost: null,
          dateStolen: null,
          serial: '123ASE1234ASF',
          photos: [],
        },
        {
          uuid: '442-134',
          title: 'Trek',
          description: 'Trek lost',
          dateFound: null,
          dateLost: Date.now(),
          dateStolen: null,
          serial: 'ABC ttes23124',
          photos: [],
        },
      ];
      setTimeout(() => {
        commit('setBikeList', mockData);
        commit('updateGettingInitialData', false);
      }, 3000);
    },
  },
  getters: {
  },
  modules: {
  },
});
