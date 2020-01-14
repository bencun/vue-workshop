<template>
  <button @click="clearSentence">Clear</button>
</template>

<script>
export default {
  name: 'ClearButton',
  data() {
    return {
      totalClicks: 0,
    };
  },
  methods: {
    clearSentence() {
      this.totalClicks += 1;
      this.$emit('button-clicked', { clicks: this.totalClicks });
    },
  },
};
</script>
