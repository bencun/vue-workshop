<template>
  <div id="app">
    <div class="container">
      <h1>To-Do List</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
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
