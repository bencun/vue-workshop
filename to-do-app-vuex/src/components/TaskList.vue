<template>
  <div class="task-list">
    <input type="checkbox" id="filterTasks" v-model="unfinishedOnly">
    <label for="filterTasks">Show only the unfinished tasks</label>

    <TaskItem v-for="(task, idx) in tasks" :key="idx"
    :taskItem="task" @remove-item="removeTask(task)"
    ></TaskItem>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  // add for getter demo
  data() {
    return {
      unfinishedOnly: false,
    };
  },
  methods: {
    removeTask(t) {
      this.$store.commit('removeTask', t);
    },
  },
  // add for a getter demo
  computed: {
    // mapState demo at a later point
    ...mapState({
      tasksArray: state => state.tasks,
    }),
    // map getters even later
    ...mapGetters({
      unfinishedTasks: 'unfinishedTasks',
    }),
    tasks() {
      if (!this.unfinishedOnly) {
        // comment out for mapState demo
        // return this.$store.state.tasks;
        return this.tasksArray;
      }
      // return this.$store.getters.unfinishedTasks;
      // comment out for mapGetters demo
      return this.unfinishedTasks;
    },
  },
};
</script>

<style lang="less">

</style>
