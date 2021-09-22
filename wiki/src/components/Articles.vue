<template>
  <h2>Articles: {{ title }}</h2>
  <pre>{{ content }}</pre>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      articles: new Map(),
      content: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setArticleContent(to.params.title)
    })
  },
  beforeRouteUpdate (to, from) {
    this.setArticleContent(to.params.title)
  },
  computed: {
  },
  methods: {
    setArticleContent (title) {
      if (this.articles.has(title)) {
        this.content = this.articles.get(title)
      } else {
        this.articles.set(title, '')
      }
    }
  }
}
</script>

<style scoped>
</style>
