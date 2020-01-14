<template>
  <div>
    <p>Name: {{person.name}}</p>
    <p>City: {{person.city}}</p>
    <p>Age: {{ person.age }}</p>

    <button @click="updateCity">Update City</button>
    <button @click="setAge">Set Age</button>
  </div>
</template>

<script>
export default {
  name: 'PersonComponent',
  data() {
    return {
      person: {
        name: 'Peter Griffin',
        city: '',
      },
      traits: ['fair', 'good looking', 'lovable'],
    };
  },
  methods: {
    updateCity() {
      this.person.city = 'Quahog';
    },
    setAge() {
      this.$set(this.person, 'age', 35);
      this.$set(this.traits, 1, 'smooth');
    },
  },
};
</script>
