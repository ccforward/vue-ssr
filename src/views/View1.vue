<template>
  <main>
    <img src="/public/logo.png">
    <h3 class="view1-title">This is View1</h3>
    <a href="/">Main</a>
    <a href="/view1">view1</a>
    <a href="/view2">view2</a>
  </main>
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
          title: 'view1 title',
          description: 'this is view1 description',
          keywords: 'view, view1'
        }
      }
    }
  }
</script>