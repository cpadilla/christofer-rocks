<template>
  <div id="Art">
    <!-- <span>Art will be shown here.</span> -->
    <ul>
        <div v-for="i in posts" :key="i.id">
            <!-- <img :src="link"/> -->
            <div class="art-container">
                <img class="img" :src="i.photos[0].original_size.url"/>
                <div class="caption">{{ i.summary }}</div>
            </div>
            <!-- {{ link }} -->
        </div>
    </ul>

    <!-- <div id="show-u"/> -->
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
    const url = 'https://api.tumblr.com/v2/blog/feel-euphoria.tumblr.com/posts/photo?api_key=9p4IzseFgnKKyDh2eWO4R9QVctMV2ckEcxeTgtekoRRNOMfI6h'
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
    padding: 10px 100px;
}

.img {
    width: 100%;
}
</style>
