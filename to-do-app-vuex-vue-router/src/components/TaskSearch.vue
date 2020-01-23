<template>
  <div class="task-form">
    <div class="left-column">
      <input type="text" class="todo-text" placeholder="Search..."
      v-model="searchText" @keydown.enter="performSearch">
    </div>
    <div class="right-column">
      <button class="todo-add" @click="performSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskSearch',
  data() {
    return {
      searchText: '',
    };
  },
  props: {
    paramSearchText: {
      type: String,
      default: '',
    },
  },
  created() {
    this.searchText = this.paramSearchText;
  },
  methods: {
    performSearch() {
      this.$router.push(`/home?sq=${this.searchText}`);
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
}
</style>
