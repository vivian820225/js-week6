<template>
  <div class="notFoundPage d-flex justify-content-center flex-column">
    <h1>此頁面不存在</h1>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss">
  .notFoundPage {
    height: 100vh;
  }
</style>
