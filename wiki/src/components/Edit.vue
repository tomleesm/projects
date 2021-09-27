<template>
  <h1>{{ article.title }}</h1>

  <a href="#edit" @click.prevent="preview = false">Edit</a> | <a href="#preview" @click.prevent="preview = true">Preview</a>

  <div class="preview" v-if="preview" v-html="html">
  </div>
  <div v-else>
    <textarea class="form-control" rows="20" v-model="content"></textarea>
  </div>

  <button type="button" class="btn btn-primary" @click="saveContent">OK</button>
  <button type="button" class="btn btn-light" @click="cancel">Cancel</button>
</template>

<script>
export default {
  props: ['article'],
  emits: ['saveContent', 'showRead'],
  computed: {
    html () {
      const wikilinks = require('@tomleesm/markdown-it-wikilinks')({
        makeAllLinksAbsolute: true,
        baseURL: '/#/articles/',
        uriSuffix: ''
      })

      const md = require('markdown-it')({
        html: false,
        linkify: true,
        typographer: true
      }).use(wikilinks)

      return md.render(this.content)
    }
  },
  data () {
    return {
      content: this.article.content,
      preview: false
    }
  },
  methods: {
    saveContent () {
      this.$emit('saveContent', this.content)
      this.$emit('showRead')
    },
    cancel () {
      this.$emit('showRead')
    }
  }
}
</script>

<style scoped>
</style>
