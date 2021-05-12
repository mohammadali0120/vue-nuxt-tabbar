<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  background: #f1f1f1;
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
