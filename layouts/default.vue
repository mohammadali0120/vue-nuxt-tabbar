<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  background: #f1f1f1;
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
