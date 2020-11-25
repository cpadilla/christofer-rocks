<template>
  <div class="post-container">
    <router-link v-for="page in pages" :to="page.path">
      <div class="post-card">
        <img class="article-image" src="../public/images/blog.png" />
        <div class="page-detail">
          <div class="page-title">{{ page.title }}</div>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: {{ page.frontmatter.author }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    console.log('mounted')
    this.$site.pages.forEach(page => {
      console.log('Adding a new page...')
      console.log(page)
      if (page.frontmatter.type == 'article') {
        console.log('success')
        console.log('page type: ' + page.frontmatter.type)
        console.log(page)
        this.pages.push(page)
      }
    })
  }
}
</script>
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.article-image {
  height: 100%;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
