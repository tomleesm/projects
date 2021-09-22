<template>
  <h1>{{ title }}</h1>
  <div class="read content" v-html="html">
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: ['title', 'content'],
  computed: {
    html () {
      const md = new MarkdownIt()
      return md.render('# markdown-it working')
    }
  }
}
</script>

<style scoped>
</style>
