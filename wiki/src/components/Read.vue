<template>
  <h1>{{ article.title }}</h1>
  <div class="read content" v-html="html">
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: ['article'],
  computed: {
    html () {
      const md = new MarkdownIt()
      return md.render(this.article.content)
    }
  }
}
</script>

<style scoped>
</style>
