<template>
  <div id="app">
    <div class="container">
      <h1>To-Do List</h1>
      <TaskForm></TaskForm>
      <TaskList></TaskList>
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
