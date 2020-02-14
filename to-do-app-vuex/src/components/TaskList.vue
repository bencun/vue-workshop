<template>
  <div class="task-list">
    <div class="task-list-filter">
      <input type="checkbox" id="filterTasks" v-model="unfinishedOnly">
      <label for="filterTasks">Show only the unfinished tasks</label>
    </div>

    <TaskItem v-for="(task, idx) in tasks" :key="`${idx}${task.text}`"
    :taskItem="task" @remove-item="removeTask(task)"
    ></TaskItem>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
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
    // add for mapMutations demo
    // !!!add namespace even later!!!
    ...mapMutations('TasksStore', {
      removeTask: 'removeTask',
    }),
    // comment out only when the time comes for mapMutations demo
    /* removeTask(t) {
      this.$store.commit('removeTask', t);
    }, */
  },
  // add for a getter demo
  computed: {
    // mapState demo at a later point
    // !!!add namespace even later!!!
    // first add state.TasksStore.tasks for demo without namespacing
    ...mapState('TasksStore', {
      tasksArray: state => state.tasks,
    }),
    // map getters even later
    // !!!add namespace even later!!!
    ...mapGetters('TasksStore', {
      unfinishedTasks: 'unfinishedTasks',
    }),
    tasks() {
      if (!this.unfinishedOnly) {
        // comment out for mapState demo
        // return this.$store.state.tasks;
        return this.tasksArray;
      }
      // comment out for mapGetters demo
      // return this.$store.getters.unfinishedTasks;
      return this.unfinishedTasks;
    },
  },
};
</script>

<style lang="less">
.task-list {
  .task-list-filter {
    width: 100%;
    text-align: center;
  }
}
</style>
