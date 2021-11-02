<template>
  <h1>Test</h1>
  <button class="btn btn-outline-primary" @click="increment()">Increment</button>
</template>

<script>
export default {
  methods: {
    increment () {
      console.log('before click count: ' + this.$store.state.count)
      this.$store.commit('increment')
      console.log('after click count: ' + this.$store.state.count)
    }
  }
}
</script>
