<template>
  <div v-if="pages" class="post-container">
    <div v-for="(year, yearName) in pages" v-bind:key="year.id">
      <div>
        <p><a v-on:click="toggleYear">{{ yearName }}</a></p>
        <div v-for="(month, monthName) in year" v-bind:key="month.id">
          <p>&emsp;<a v-on:click="toggleYear">{{ months[monthName] }}</a></p>
          <div v-for="(day, dayName) in month" v-bind:key="day.id">
            <p>&emsp;&emsp;<a v-on:click="toggleYear">{{ dayName }}</a></p>
              <div v-for="(article, relativePath) in day" v-bind:key="article.id">
                <p>&emsp;&emsp;&emsp;<router-link :to="article.regularPath">{{ article.title }}</router-link></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <router-link v-for="page in pages" :to="page.path">
    <div class="post-container">
      <div v-for="page in pages" class="post-card">
        <div class="page-detail">
          <router-link :to="page.path">
          <div class="page-title">{{ page.title }}</div>
          </router-link>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-date">{{ page.frontmatter.date }}</div>
        </div>
      </div>
    </div>
    -->
</template>
<script>
export default {
  data() {
    return {
      pages: {},
      months: [ "Secret Hidden Month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    }
  },
  mounted: function() {
    console.log("Mounted.")
    //console.log(this.$site)
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type == 'article') {
        //console.log(page);
        // Use regex on relative path to calculate date
        var date = page.relativePath.match(/(?!blog\/)\d+/g);
        var year = date[0];
        var month = date[1];
        var day = date[2];
        if (!this.pages[year]) {
          //var newYear = [year];
          this.pages[year] = { }
        }
        if (!this.pages[year][month]) {
          this.pages[year][month] = { };
        }
        if (!this.pages[year][month][day]) {
          this.pages[year][month][day] = { };
        }
        this.pages[year][month][day][page.relativePath] = page;
      }
    })

    console.log(this.pages);
  },
  updated() {
    console.log("updated.")
    //console.log(this.$site)
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type == 'article') {
        //console.log(page);
        // Use regex on relative path to calculate date
        var date = page.relativePath.match(/(?!blog\/)\d+/g);
        var year = date[0];
        var month = date[1];
        var day = date[2];
        if (!this.pages[year]) {
          //var newYear = [year];
          this.pages[year] = { }
        }
        if (!this.pages[year][month]) {
          this.pages[year][month] = { };
        }
        if (!this.pages[year][month][day]) {
          this.pages[year][month][day] = { };
        }
        this.pages[year][month][day][page.relativePath] = page;
      }
    })

    console.log(this.pages);
  },
  onUpdated() {
    console.log("onUpdated.")
    //console.log(this.$site)
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type == 'article') {
        //console.log(page);
        // Use regex on relative path to calculate date
        var date = page.relativePath.match(/(?!blog\/)\d+/g);
        var year = date[0];
        var month = date[1];
        var day = date[2];
        if (!this.pages[year]) {
          //var newYear = [year];
          this.pages[year] = { }
        }
        if (!this.pages[year][month]) {
          this.pages[year][month] = { };
        }
        if (!this.pages[year][month][day]) {
          this.pages[year][month][day] = { };
        }
        this.pages[year][month][day][page.relativePath] = page;
      }
    })

    console.log(this.pages);
  },
  methods: {
    toggleYear: function(year) {
      console.log("Toggle year: " + year.toggle);
    }
  }
}
</script>
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column-reverse;
}
.yline {
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
a {
  cursor: pointer;
}
</style>
