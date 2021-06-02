<template>
  <div class="archive-container">
    <div v-if="true" class="year-container">
      <ul v-for="(year, yearName) in sortedPages" v-bind:key="year.id">
        <li>
          <p><a v-on:click="showYear(year)"><u>{{ yearName }}</u></a></p>
        </li>
      </ul>
    </div>
    <!-- Month -->
    <div v-if="this.year">
      <div v-for="(month, monthName) in year" v-bind:key="month.id">
        <h2>&emsp;{{ months[monthName] }}</h2>
          <div class="post-container">
            <!-- Cards -->
              <div v-if="page.frontmatter != null && page.frontmatter.type == 'post'" v-for="page in month" v-bind:key="page.frontmatter.date" class="post-card">
                <div v-if="page.frontmatter != null && page.frontmatter.meta[4].name == 'twitter:image'" class="article-image-container">
                  <router-link v-if="page.regularPath" :to="page.regularPath">
                    <img class="article-image" v-if="page.frontmatter.meta[4].name == 'twitter:image'" :src="page.frontmatter.meta[4].content" />
                  </router-link>
                </div>
                <div class="page-detail">
                  <router-link :to="page.regularPath">
                  <div class="page-title">{{ page.title }}</div>
                  </router-link>
                  <div v-if="page.frontmatter != null && page.frontmatter.description != null" class="page-description">{{ page.frontmatter.description }}</div>
                  <div v-if="page.frontmatter != null" class="page-date">{{ new Date(page.frontmatter.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Archive',
  data() {
    return {
      pages: {},
      months: [ "Secret Hidden Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
      month: '',
      year: {}
    }
  },
  mounted: function() {
  },
  computed: {
    sortedPages: function(month) {
      function compare(a, b) {
        if (a.frontmatter.date < b.frontmatter.date)
          return -1;
        if (a.frontmatter.date > b.frontmatter.date)
          return 1;
        return 0;
      }
      function insertSorted (array, element, comparator) {
        for (var i = 0; i < array.length && comparator(array[i], element) < 0; i++) {}
        array.splice(i, 0, element)
      }

      this.$site.pages.forEach(page => {
        if (page.frontmatter.type == 'post') {
          //console.log(page);
          // Use regex on relative path to calculate date
          var date = page.relativePath.match(/(?!blog\/)\d+/g);
          var year = date[0];
          var month = date[1];
          if (!this.pages[year]) {
            //var newYear = [year];
            this.pages[year] = { }
          }
          if (!this.pages[year][month]) {
            this.pages[year][month] = [ ];
          }
          insertSorted(this.pages[year][month], page, compare);
        }
      })

      return this.pages;
    }
  },
  methods: {
    showYear: function(year) {
      this.year = year;
    }
  }
}
</script>
<style scoped>
.archive-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.year-container {
  display: flex;
  line-height: 1;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
}
.year-container ul {
  list-style-type: none;
  margin: 0px;
}
.yline {
}
.page-detail > div {
  padding-top: 5px;
}
.post-card {
  max-width: 600px;
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
a {
  cursor: pointer;
}
</style>
