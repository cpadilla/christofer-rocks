<template>
  <div class="post-container">
    <!-- <router-link v-for="page in pages" :to="page.path"> -->
      <div v-for="page in pages" class="post-card">
        <!-- <img class="article-image" src="../public/images/blog.png" /> -->
        <div class="page-detail">
          <router-link :to="page.path">
          <div class="page-title">{{ page.title }}</div>
          </router-link>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-date">{{ page.frontmatter.date }}</div>
        </div>
      </div>
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
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type == 'article') {
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
.page-detail > div {
  padding-top: 5px;
}
.post-card {
  width: 600px;
  height: 150px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 10px 30px;
  display: flex;
  align-items: center;
}
.page-title {
  font-size: 20px;
}
.page-date {
  font-size: 0.9rem;
  color: grey;
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
