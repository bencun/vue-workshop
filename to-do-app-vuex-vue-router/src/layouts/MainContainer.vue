<template>
  <div class="main-container">
    <router-view :key="$route.path" name="helper"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>
