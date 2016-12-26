<template>
  <div class="main-content">
    <h1>Vue SSR Template</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        item: {
          href: '#!',
          text: 'Get Started'
        }
      }
    },

    methods: {
      meta (obj) {
        if (typeof obj === 'string') {
          return this.title = obj
        }
        this.title = obj.h1
      }
    }
  }
</script>