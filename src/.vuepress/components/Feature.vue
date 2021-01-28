<template>
  <div class="post-container">
      <div v-if="this.page" class="post-card">
        <div v-if="this.page" class="article-image-container">
          <router-link v-if="this.page.regularPath" :to="this.page.regularPath">
            <img class="article-image" v-if="this.previewImage" :src="this.previewImage" />
          </router-link>
        </div>
        <div v-if="this.page" class="page-detail">
          <router-link v-if="this.page.regularPath" :to="this.page.regularPath">
          <div v-if="this.page" class="page-title">{{ this.page.title }}</div>
          </router-link>
          <div v-if="this.page.frontmatter" class="page-description">{{ this.page.frontmatter.description }}</div>
          <div v-if="this.page.frontmatter" class="page-date">{{ new Date(this.page.frontmatter.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['article'],
  data() {
    return {
      page: {}
    }
  },
  mounted() {
    this.page = this.$site.pages.find(page => page.relativePath == this.article);
    this.previewImage = this.page.frontmatter.meta[4].content;
    //console.log(this.page);
  }
}
</script>
<style scoped>
.post-container {
  display: flex;
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
