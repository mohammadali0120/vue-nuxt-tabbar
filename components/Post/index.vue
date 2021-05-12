<template>
  <div class="container">
    <div class="post">
      <div class="post__title">
        <h2>{{ fullFeedItem().title }}</h2>
      </div>
      <div class="post__content">
        <p>
          {{ fullFeedItem().text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  methods: {
    fullFeedItem() {
      return this.posts.find((val) => val.link.link === this.$route.fullPath)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
}
.post {
  width: 100%;
  padding: 10px 0;
  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    h2 {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  &__content {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    p {
      line-height: 1.3;
      font-size: 19px;
    }
  }
}
</style>
