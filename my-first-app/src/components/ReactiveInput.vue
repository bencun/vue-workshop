<template>
  <div>
    <label>Enter some text:</label>
    <input type="text" v-model="ordinarySentence">
    <input type="text" :value="quotedSentence">
    <ClearButton @button-clicked="removeSentence"></ClearButton>

    <SimpleParagraph :my-sentence="ordinarySentence"></SimpleParagraph>
    <PersonComponent></PersonComponent>

  </div>
</template>

<script>
import SimpleParagraph from './SimpleParagraph.vue';
import ClearButton from './ClearButton.vue';
import PersonComponent from './PersonComponent.vue';

export default {
  name: 'ReactiveInput',
  components: {
    SimpleParagraph,
    ClearButton,
    PersonComponent,
  },
  data() {
    return {
      ordinarySentence: 'Can I render this text?',
    };
  },
  methods: {
    removeSentence(eventData) {
      this.ordinarySentence = '';
      console.log('Total clicks:', eventData);
    },
  },
  computed: {
    quotedSentence() {
      return `"${this.ordinarySentence}"`;
    },
  },
};
</script>
