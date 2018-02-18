<template>
  <div id="Blog">
    <ul>
        <div v-for="i in posts" :key="i.id">
            <div class="art-container">
                <div v-if="i.type === 'text'">
                  <div class="title">{{ i.title }}</div>
                  <div class="date">{{ i.date }}</div>
                  <div class="body" v-html="i.body"></div>
                </div>
                <div v-else-if="i.type === 'photo'">
                  <img class="img" :src="i.photos[0].original_size.url"/>
                  <div class="date">{{ i.date }}</div>
                  <div class="caption" v-html="i.caption"></div>
                </div>
            </div>
        </div>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blog',
  data () {
    return {
      i: '',
      posts: [ { title: 'Requesting tumblr API...' } ]
    }
  },
  created () {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://api.tumblr.com/v2/blog/christoferpadilla.tumblr.com/posts?api_key=9p4IzseFgnKKyDh2eWO4R9QVctMV2ckEcxeTgtekoRRNOMfI6h'
    axios.get(proxyurl + url)
      .then(response => {
        // Json responses are automatically parsed
        console.log(response.data)
        this.posts = response.data.response.posts
      })
      .catch(e => {
        console.error(e)
        this.link = 'There was an error connecting to tumblr'
      })
  }
}
</script>

<style scoped>
.art-container {
    display: inline-block;
    text-align: center;
    /* width: 500px; */
    padding: 10px 100px;
    max-width: 50vw;
}

.img {
    width: 100%;
}

.title  {
  font-weight: bold;
}

.date {
  font-size: 60%;
}

.body {
  text-align: justify;
}

/* .body > img {
  text-align: center;
}

img {
  width: 100%;
} */

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: list-item !important;
}
</style>

<style>

.body > img {
  text-align: center;
}

img {
  width: 100%;
}
</style>
