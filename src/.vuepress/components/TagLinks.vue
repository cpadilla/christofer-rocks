<!-- .vuepress/components/TagLinks.vue -->
<template lang="html">
  <div>
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: '/tags.html#'+safeLink(tag) }">
      {{tag}}
    </router-link>
  </div>
</template>
<script>
export default {
  methods: {
    safeLink(tag) {
      const whitespace = /\s/g
      const apostrophe = /["']/g
      return tag.replace(whitespace,'').replace(apostrophe,'')
    }
  }
}
</script>
