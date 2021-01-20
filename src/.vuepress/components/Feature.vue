<template>
  <div class="post-container">
      <div v-if="this.page" class="post-card">
        <div v-if="this.page" class="page-detail">
          <router-link v-if="this.page.regularPath" :to="this.page.regularPath">
          <div v-if="this.page" class="page-title">{{ this.page.title }}</div>
          </router-link>
          <div v-if="this.page.frontmatter" class="page-description">{{ this.page.frontmatter.description }}</div>
          <div v-if="this.page.frontmatter" class="page-date">{{ this.page.frontmatter.date }}</div>
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
  flex-wrap: wrap;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 10px;
  padding-left: 30px;
  display: flex;
  align-items: center;
}
.page-title {
  font-size: 20px;
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
