<template>
  <div id="Game">
    <ul>
        <div>Games will be shown here.</div>
        <div v-for="repo in repos" :key="repo.id">
            <div class="game-container">
                {{ repo.name }}
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
      repos: []
    }
  },
  checkTag (name) {

  },
  created () {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://api.github.com/users/cpadilla/repos'
    axios.get(proxyurl + url)
      .then(response => {
        // Json responses are automatically parsed
        console.log(response.data)
        var i
        for (i = 0; i < response.data.length; i++) {
          const newUrl = 'https://api.github.com/repos/cpadilla/' + response.data[i].name + '/topics'
          axios.get(newUrl)
            .then(response2 => {
              console.log(response2)
              if (response2.data.names.includes('game')) {
                this.repos = response.data
              }
            })
        }
        // this.repos = response.data
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
