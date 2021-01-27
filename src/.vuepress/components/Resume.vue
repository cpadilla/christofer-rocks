<template>
  <div class="post-container">
      <div v-if="this.page" class="post-card">
        <div v-if="this.page" class="page-detail">
          <a href="https://christofer.codes">
            <div v-if="this.page" class="page-title">{{ this.page.title }}</div>
          </a>
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
    this.page = this.$site.pages.find(page => page.relativePath == 'resume.md');
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
