// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: (state) => ({ tabs: state.tabs }),
    // modules: [''], // if you want to import a module just put its name between single quotes on the modules array
    // more info : https://github.com/championswimmer/vuex-persist
  }).plugin(store)
}
