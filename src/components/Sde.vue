<template>
  <div>
    <h2>SDE</h2>
    <p>The SDE is a collection of static information that ships with Albion Online and that has been converted into more useful formats.</p>
    <p>You can view the source code used to build the SDE here: https://github.com/Regner/aodb</p>
    <div v-if="loaded">
      <sde-explorer></sde-explorer>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SdeExplorer from './SdeExplorer.vue'

  export default {
    components: {
      SdeExplorer
    },
    computed: mapGetters({
      loaded: 'sdeLoaded',
    }),
    created () {
      this.$store.dispatch('loadSDEContent')
    }
  }
</script>

<style lang="stylus">
ul
  padding-left 10px
  list-style-type none
</style>