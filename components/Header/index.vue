<template>
  <div class="header">
    <ul class="header__items">
      <nuxt-link to="/" class="header__items-link"> Home </nuxt-link>
      <nuxt-link to="/posts" class="header__items-link"> Posts </nuxt-link>
      <template v-for="(item, index) in getTabs">
        <div :key="index" style="display: contents">
          <nuxt-link :to="item.link" class="header__items-link">
            {{ item.name }}
            <span class="header__items-btn">
              <button @click="removeTab(item)">✖</button>
            </span>
          </nuxt-link>
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    getTabs() {
      return this.$store.getters.getTabs
    },
  },
  methods: {
    removeTab(payload) {
      this.$store.dispatch('removeTab', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #111;
  padding: 15px 0;
  &__items {
    width: 100%;
    &-link {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      padding: 10px 13px;
    }

    &-btn {
      background: transparent;
      padding: 10px 4px;
      button {
        font-weight: bold;
        cursor: pointer;
        border: none;
        color: #eee;
        font-size: 13px;
        background: transparent;
      }
    }
    &-active-btn {
      background: #555;
    }
    .nuxt-link-exact-active {
      background: #555;
    }
  }
}
</style>
