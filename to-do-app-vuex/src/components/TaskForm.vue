<template>
  <div class="task-form">
    <div class="left-column">
      <input type="text" class="todo-text" placeholder="Enter the task..."
      v-model="todoText" @keydown.enter="addTask">
    </div>
    <div class="right-column">
      <button class="todo-add" @click="addTask">Add</button>
    </div>
    <div class="error-container" v-if="errorText.length">Error: {{errorText}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskForm',
  data() {
    return {
      todoText: '',
      errorText: '',
    };
  },
  methods: {
    // added only for mapactions demo
    // !!!add namespace even later!!!
    ...mapActions('TasksStore', {
      addTaskAction: 'ADD_TASK',
    }),
    addTask() {
      // add validation later!
      if (this.todoText.length === 0) {
        this.errorText = 'you must type in some text!';
      } else {
        // this.$emit('task-created', this.todoText);
        // comment out for mapAction demo
        // this.$store.dispatch('ADD_TASK', { text: this.todoText, completed: false });
        this.addTaskAction({ text: this.todoText, completed: false });
        this.todoText = '';
        this.errorText = '';
      }
    },
  },
};
</script>

<style lang="less">
@input-height: 32px;
.task-form {
  display: flex;
  justify-content: center;
  align-items: center;
  //error-container stuff needed
  flex-wrap: wrap;

  .todo-text,
  .todo-add {
    height: @input-height;
    font-size: 14px;
  }

  .todo-text {
    padding: 4px;
    width: 100%;
  }

  .error-container {
    flex-basis: 100%;
    text-align: center;
    color: red;
  }

}
</style>
