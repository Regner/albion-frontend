<template>
  <li>
    <label v-on:click="toggle">
      <span :class="chevron"></span> {{ version }}
    </label>
    <ul v-show="open">
      <sde-item v-for="item in items" :name="item.name" :url="item.url" :size="item.size" :updated="item.updated"></sde-item>
    </ul>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SdeItem from './SdeItem.vue'

  export default {
    components: {
      SdeItem
    },
    props: [
      'version',
      'items'
    ],
    data () {
      return {
        open: false,
        chevron: 'fa fa-chevron-right'
      }
    },
    methods: {
      toggle: function () {
        this.open = !this.open
        this.chevron = this.open ? 'fa fa-chevron-down' : 'fa fa-chevron-right'
      }
    }
  }
</script>