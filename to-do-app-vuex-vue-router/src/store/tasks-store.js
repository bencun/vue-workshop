export default {
  namespaced: true,
  state: {
    tasks: [
      { id: 1, text: 'Buy some milk', completed: false },
      { id: 2, text: 'Fix the computer', completed: false },
      { id: 3, text: 'Uninstall Windows', completed: false },
    ],
    counter: 3,
  },
  mutations: {
    addTask(state, payload) {
      state.counter += 1;
      const newTask = { id: state.counter, ...payload };
      state.tasks.push(newTask);
    },
    updateTask(state, payload) {
      const idx = state.tasks.findIndex(e => e.id === payload.id);
      state.tasks.splice(idx, 1, payload);
    },
    removeTask(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
  },
  actions: {
    ADD_TASK(context, payload) {
      context.commit('addTask', payload);
    },
    UPDATE_TASK(context, payload) {
      context.commit('updateTask', payload);
    },
  },
  getters: {
    unfinishedTasks(state) {
      return state.tasks.filter(e => !e.completed);
    },
  },
};
