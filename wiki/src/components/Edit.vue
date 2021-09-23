<template>
  <h1>{{ article.title }}</h1>

  <a href="#edit" @click.prevent="preview = false">Edit</a> | <a href="#preview" @click.prevent="preview = true">Preview</a>

  <div class="preview" v-if="preview" v-html="html">
  </div>
  <div v-else>
    <textarea v-model="content"></textarea>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: ['article'],
  computed: {
    html () {
      const md = new MarkdownIt()
      return md.render(this.content)
    }
  },
  data () {
    return {
      content: this.article.content,
      preview: false
    }
  }
}
</script>

<style scoped>
</style>
