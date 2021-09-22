<template>
  <Read :article="article"></Read>
</template>

<script>
import Read from './Read.vue'

export default {
  components: {
    Read
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      articles: new Map(),
      article: {
        title: this.title,
        content: ''
      }
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
  methods: {
    setArticleContent (title) {
      if (this.articles.has(title)) {
        this.article.content = this.articles.get(title)
      } else {
        this.articles.set(title, '')
      }
    }
  }
}
</script>

<style scoped>
</style>
