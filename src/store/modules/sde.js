import albionbackend from '../../api/albionbackend'

const state = {
  loaded: false,
  content: {}
}

const getters = {
  sdeLoaded () {
    return state.loaded
  },
  sdeContent () {
    return state.content
  },
  sdeVersions () {
    return Object.keys(state.content).sort()
  },
  sdeExports (state, version) {
    return state.conent[version]
  }
}

const actions = {
  loadSDEContent ({commit, state}) {
    if(!state.loaded) {
      albionbackend.getSDEInfo()
      .then(function (response) {
        commit({
          type: 'setContent',
          content: response.data
        })

        commit('setContentLoaded')
      })
    }
  }
}

const mutations = {
  setContentLoaded () {
    state.loaded = true
  },
  setContent (state, payload) {
    state.content = payload.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}