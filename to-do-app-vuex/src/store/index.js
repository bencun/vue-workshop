import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { text: 'Buy some milk', completed: false },
      { text: 'Fix the computer', completed: false },
      { text: 'Uninstall Windows', completed: false },
    ],
  },
  mutations: {
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    removeTask(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
  },
  actions: {
    ADD_TASK(context, payload) {
      context.commit('addTask', payload);
    },
  },
  getters: {
    unfinishedTasks(state) {
      return state.tasks.filter(e => !e.completed);
    },
  },
  modules: {
  },
});
