<template>
  <div>
    <div class="h-full" v-html="htmlCode"></div>
    <div class="flex">
      <div class="flex-1 px-6">
        <pre ><code style="word-break: break-all;white-space: pre-wrap;" class="language-html">{{htmlCode}}</code></pre>
      </div>
      <div class="flex-1 px-6">
        <pre ><code style="word-break: break-all;white-space: pre-wrap;" class="language-css">{{cssCode}}</code></pre>
      </div>
    </div>
  </div>
</template>
<script>
  import Inspirations from '@/assets/HtmlInspirations'
  import'prismjs'
  export default {
    data () {
      return {
        htmlCode: '',
        cssCode: '',
        code: ''
      }
    },
    methods: {
    },
    mounted () {
      this.htmlCode = Inspirations[this.$route.params.id].html
      this.cssCode = Inspirations[this.$route.params.id].css
    }
  }
</script>
<style>
  @import '../../../node_modules/prismjs/themes/prism-Okaidia.css'; 
</style>
