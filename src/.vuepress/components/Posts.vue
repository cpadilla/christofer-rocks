<template>
  <div class="post-container">
    <!-- <router-link v-for="page in pages" :to="page.path"> -->
      <div v-for="page in pages" class="post-card">
        <div v-if="page.frontmatter.meta[4].name == 'twitter:image'" class="article-image-container">
          <router-link v-if="page.regularPath" :to="page.regularPath">
            <img class="article-image" v-if="page.frontmatter.meta[4].name == 'twitter:image'" :src="page.frontmatter.meta[4].content" />
          </router-link>
        </div>
        <div class="page-detail">
          <router-link :to="page.path">
          <div class="page-title">{{ page.title }}</div>
          </router-link>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-date">{{ new Date(page.frontmatter.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
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
      if (page.frontmatter.type == 'post') {
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
.article-image-container {
  width: 100px;
  margin-right: 20px;
}
@media only screen and (max-width: 400px) {
  .article-image-container {
    display: none;
  }
}
.article-image {
  height: auto;
  max-height: 100px;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
