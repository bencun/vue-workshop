<template>
  <p class="bold-text">Your text is: {{ mySentence }}</p>
</template>

<script>
export default {
  name: 'SimpleParagraph',
  props: {
    mySentence: String,
  },
};
</script>

<style lang="less">
  .bold-text {
    font-weight: 700;
  }
</style>
