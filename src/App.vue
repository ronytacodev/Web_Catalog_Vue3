<template>
  <main-header />
  <router-view />
</template>

<script>

import MainHeader from './components/includes/MainHeader.vue';

export default {
  name: 'App',
  components: {
    MainHeader
  }
}

</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
}
</style>
