<template>
  <h1>{{ article.title }}</h1>
  <div class="read content" v-html="html">
  </div>
</template>

<script>
export default {
  props: ['article'],
  computed: {
    html () {
      const wikilinks = require('@tomleesm/markdown-it-wikilinks')({
        makeAllLinksAbsolute: true,
        baseURL: '/#/articles/',
        uriSuffix: '',
        htmlAttributes: {
          target: '_blank'
        }
      })

      const md = require('markdown-it')({
        html: false,
        linkify: true,
        typographer: true
      }).use(wikilinks)

      return md.render(this.article.content)
    }
  }
}
</script>

<style scoped>
</style>
