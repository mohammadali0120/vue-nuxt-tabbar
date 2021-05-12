<template>
  <div class="container">
    <div class="posts-wrapper">
      <div
        v-for="(item, index) in getPosts"
        :key="index"
        class="posts-wrapper__posts"
      >
        <div class="posts-wrapper__posts-title">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="posts-wrapper__posts-content">
          <p>
            {{ item.text }}
          </p>
        </div>
        <div class="posts-wrapper__posts-link">
          <nuxt-link
            :to="item.link.link"
            @click.native="addNewTab(item.link)"
            >{{ item.link.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    },
  },
  methods: {
    addNewTab(payload) {
      this.$store.dispatch('addNewTab', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 95%;
  margin: 0 auto;
}
.posts-wrapper {
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__posts {
    width: 32%;
    max-width: 32%;
    flex-basis: 32%;
    &-title {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      h2 {
        font-weight: bold;
        text-transform: uppercase;
      }
    }
    &-content {
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      p {
        line-height: 1.3;
        font-size: 19px;
      }
    }
    &-link {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      background: #5f5e5e;
      border-radius: 3px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      &:hover {
        background: #727171;
      }
      a {
        text-decoration: none;
        color: #eee;
        font-weight: bold;
        text-transform: uppercase;
        display: block;
        width: 100%;
        padding: 8px 0;
      }
    }
  }
}
</style>
