<template>
  <div class="task-list">
    <TaskSearch></TaskSearch>
    <div class="task-list-filter">
      <input type="checkbox" id="filterTasks" v-model="unfinishedOnly">
      <label for="filterTasks">Show only the unfinished tasks</label>
      <router-link to="/home/new" tag="button" class="new-button">Add New</router-link>
    </div>

    <TaskItem v-for="(task, idx) in tasks" :key="idx"
    :taskItem="task" @remove-item="removeTask(task)"
    ></TaskItem>

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import TaskItem from './TaskItem.vue';
import TaskSearch from './TaskSearch.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
    TaskSearch,
  },
  // add for getter demo
  data() {
    return {
      unfinishedOnly: false,
    };
  },
  props: {
    searchString: {
      type: String,
      default: '',
    },
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
      let finalArray = [];
      if (!this.unfinishedOnly) {
        finalArray = this.tasksArray;
      } else {
        finalArray = this.unfinishedTasks;
      }

      if (this.searchString.length > 0) {
        finalArray = finalArray.filter(
          e => e.text.toLowerCase().includes(this.searchString.toLowerCase()),
        );
      }

      return finalArray;
    },
  },
};
</script>

<style lang="less">
.task-list {
  .task-list-filter {
    width: 100%;
    text-align: center;

    .new-button {
      margin-left: 4px;
    }
  }
}
</style>
