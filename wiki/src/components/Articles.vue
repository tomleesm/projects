<template>
  <a href="#read" @click.prevent="edit = false">Read</a> | <a href="#edit" @click.prevent="edit = true">Edit</a>

  <Edit v-if="edit" :article="article" @save-content="saveContent" @show-read="edit = false"></Edit>
  <Read v-else :article="article"></Read>
</template>

<script>
import Read from './Read.vue'
import Edit from './Edit.vue'

export default {
  components: {
    Read, Edit
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
      },
      edit: false
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
    },
    saveContent (content) {
      this.articles.set(this.article.title, content)
      this.article.content = content
    }
  }
}
</script>

<style scoped>
</style>
