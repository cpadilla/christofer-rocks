<!-- .vuepress/components/TagList.vue -->
<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
      <h2 :id="safeLink(tag)">
        <router-link
          :to="{ path: '#'+safeLink(tag) }"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag}}
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {}
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (tag in tags) {
            tags[tag].push(page)
          } else {
            tags[tag] = [page]
          }
        }
      }
      return tags
    }
  },
  methods: {
    safeLink(tag) {
      const whitespace = /\s/g
      const apostrophe = /["']/g
      return tag.replace(whitespace,'-').replace(apostrophe,'-')
    }
  }
}
</script>
<style>
h2 {
  padding-top: 60px;
  margin-top: 0px;
}
ul {
  margin-bottom: 0px;
}
</style>
