<template>
  <main>
    <router-view></router-view>
  </main>
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