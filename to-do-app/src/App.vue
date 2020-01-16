<template>
  <div id="app">
    <div class="container">
      <h1>To-Do List</h1>
      <TaskForm @task-created="createTask"></TaskForm>
      <TaskList :tasks-array="tasks"></TaskList>
    </div>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'app',
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      tasks: [
        { text: 'Buy some milk', completed: false },
        { text: 'Fix the computer', completed: false },
        { text: 'Uninstall Windows', completed: false },
      ],
    };
  },
  methods: {
    createTask(event) {
      // this makes the object pushed into
      // ...an already reactive array a reactive object itself
      // ...since .push() is overriden by Vue as well!
      this.tasks.push({
        text: event,
        completed: false,
      });

      console.log(this.tasks);
    },
  },
};
</script>

<style lang="less">
html {
  box-sizing: border-box
};
*, *::after, *::before {
  box-sizing: inherit;
}

.container {
  width: 600px;
  margin: auto;
  h1 {
    text-align: center;
  }
}

.left-column {
  width: 200px;
  padding-right: 8px;
}
.right-column {
  width: 40px;
}
</style>
