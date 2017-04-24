import Vue from 'vue'
import Vuex from 'vuex'
import sde from './modules/sde'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sde
  }
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./modules/sde'], () => {
    const newModuleSde = require('./modules/sde').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        sde: newModuleSde
      }
    })
  })
}

export default store