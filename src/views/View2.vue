<template>
  <div>
    <img src="/public/logo.png">
    <h2>view2</h2>
    <a href="/">APP</a>
    <a href="/view1">view1</a>
    <a href="/view2">view2</a>
  </div>
</template>
<script>
  export default {
    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'view2 title',
          h1: 'view2 - view2',
          description: 'this is view2 description',
          keywords: 'view, view2'
        }
      }
    }
  }
</script>