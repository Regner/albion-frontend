<template>
  <div>
    <ul>
      <sde-version v-for="(items, version) in content" :version="version" :items="items"></sde-version>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SdeVersion from './SdeVersion.vue'

  export default {
    components: {
      SdeVersion
    },
    computed: mapGetters({
      content: 'sdeContent',
    })
  }
</script>