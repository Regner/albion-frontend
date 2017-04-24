<template>
  <li>
    <a :href="url">{{updated}} - {{name}} - {{size | file-size}}</a>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: [
      'name',
      'url',
      'size',
      'updated'
    ]
  }
</script>