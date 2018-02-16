<template>
  <div id="Game">
    <ul>
        <div>Games will be shown here.</div>
        <div v-for="repo in repos" :key="repo.id">
            <!-- <div class="game-container">
                {{ repo.id }}
            </div> -->
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
      repos: []
    }
  },
  created () {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://api.github.com/users/cpadilla/repos'
    axios.get(proxyurl + url)
      .then(response => {
        // Json responses are automatically parsed
        console.log(response.data)
        this.repos = response.data
      })
      .catch(e => {
        console.error(e)
        this.link = 'There was an error connecting to tumblr'
      })
  }
}
</script>

<style scoped>
.game-container {
    display: inline-block;
    text-align: center;
    /* width: 500px; */
    padding: 10px 100px;
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
