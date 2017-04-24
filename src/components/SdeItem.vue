<template>
  <li>
    <a :href="url">{{name}}</a>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: [
      'name',
      'url'
    ]
  }
</script>