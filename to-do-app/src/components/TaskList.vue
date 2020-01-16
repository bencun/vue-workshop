<template>
  <div class="task-list">
    <TaskItem v-for="(task, idx) in tasksArray" :key="idx"
    :taskItem="task" @remove-item="removeTask(task)"
    ></TaskItem>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  props: {
    tasksArray: {
      required: true,
      type: [Array],
    },
  },
  created() {
    console.log(this.tasksArray);
  },
  methods: {
    removeTask(t) {
      // okay to do since we're not mutating the prop directly!
      this.tasksArray.splice(this.tasksArray.indexOf(t), 1);
    },
  },
};
</script>

<style lang="less">

</style>
