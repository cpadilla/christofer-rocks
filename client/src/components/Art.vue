<template>
  <div id="Art">
    <ul>
        <div v-for="i in posts" :key="i.id">
          <div class="art-container">
              <a :href="i.post_url" target="_blank">
              <img class="img" :src="i.photos[0].original_size.url"/>
              </a>
              <div class="caption">{{ i.summary }}</div>
          </div>
        </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Art',
  data () {
    return {
      link: '',
      i: '',
      art: [
        {text: 'test1'},
        {text: 'test2'},
        {text: 'test3'}
      ],
      posts: []
    }
  },
  created () {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://api.tumblr.com/v2/blog/christofer-art.tumblr.com/posts/photo?api_key=9p4IzseFgnKKyDh2eWO4R9QVctMV2ckEcxeTgtekoRRNOMfI6h'
    axios.get(proxyurl + url)
      .then(response => {
        // Json responses are automatically parsed
        console.log(response.data)
        this.link = response.data.response.posts[0].photos[0].original_size.url
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
  padding: 20px 100px;
  max-width: 50vw;
}

.img {
  width: 100%;
}

ul {
  padding: 0px;
  margin: 0px;
}
</style>
