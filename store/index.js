export const state = () => ({
  tabs: [],
  posts: [
    {
      title: 'Hey this is title of frist post',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo!',
      link: { name: 'Post Frist', value: 'post frist', link: '/posts/1' },
    },
    {
      title: 'Hey this is title of second post',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo!',
      link: { name: 'Post Second', value: 'post second', link: '/posts/2' },
    },
    {
      title: 'Hey this is title of third post',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolorum harum aut quos dicta sed a quidem ex enim ratione corporis, modi odio unde ipsa ab commodi nulla pariatur nemo!',
      link: { name: 'Post Third', value: 'post third', link: '/posts/3' },
    },
  ],
  activeTab: -1,
})
export const getters = {
  getTabs(state) {
    return state.tabs
  },
  getPosts(state) {
    return state.posts
  },
}
export const mutations = {
  addNewTab(state, payload) {
    const existingItem = state.tabs.find((item) => item.link === payload.link)
    if (existingItem) {
      alert(
        "You've redirected where you just clicked but the tab already exists and can't be added again!"
      )
    } else {
      state.tabs.push(payload)
    }
  },
  removeTab(state, payload) {
    const index = state.tabs.findIndex((item) => item === payload)
    state.tabs.splice(index, 1)
    state.activeTab = -1
    setTimeout(() => {
      this.$router.push('/posts')
    }, 100)
  },
  activeTab(state, payload) {
    state.activeTab = payload
  },
  deactiveTab(state) {
    state.activeTab = -1
  },
}
export const actions = {
  addNewTab({ commit }, payload) {
    commit('addNewTab', payload)
  },
  removeTab({ commit }, payload) {
    commit('removeTab', payload)
  },
  activeTab({ commit }, payload) {
    commit('activeTab', payload)
  },
  deactiveTab({ commit }) {
    commit('deactiveTab')
  },
}
