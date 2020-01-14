<template>
  <div id="app">
    Hello, Vue!
    <ReactiveInput></ReactiveInput>
  </div>
</template>

<script>
import ReactiveInput from './components/ReactiveInput.vue';

export default {
  name: 'app',
  components: {
    ReactiveInput,
  },
};
</script>

<style lang="less">

</style>
