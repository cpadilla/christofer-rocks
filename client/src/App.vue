<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"/>
      <div id="container" class="unselectable">
        <transition name="custom-classes-transition"
          enter-active-class="animated fadeInDown">
          <span id="tweet" v-if="show" v-html="tweet"></span>
        </transition>
      </div>
    <div id="logo"/>
    <ul>
      <li>
        <a id="testing" href="/" target="_self" >
          Art
        </a>
      </li>
      <li>
        <a href="/" target="_self">
          Games
        </a>
      </li>
      <li>
        <a href="/" target="_self">
          Blog
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import Autolinker from 'Autolinker'

export default {
  name: 'App',
  // eslint-disable-next-line
  // el: '#container', 
  data () {
    return {
      // tweet: 'Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non'
      tweet: '...',
      show: false
    }
  },
  watch: {
    tweet: function (newValue, oldValue) {
      this.show = true
    }
  },
  // Fetches Twitter tweets when component is created.
  created () {
    var config = {
      headers: {
        'Authorization': 'OAuth oauth_consumer_key="OXkNIcCUl2D6cBJ6XDoOVN5ky",oauth_token="88245391-BenOOM9aVnVoxCJbCSUIejlqMy7TURat3EnHQTo9o",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1518749707",oauth_nonce="f1Kn4lWsrJH",oauth_version="1.0",oauth_signature="R%2BRJk5KE%2B2WaJTbwRHDJwH1pyEY%3D"',
        'count': 1,
        'screen_name': 'rockzombie2'
      }
    }
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://api.twitter.com/1.1/statuses/user_timeline.json'
    axios.get(proxyurl + url, config)
      .then(response => {
        // Json responses are automatically parsed
        console.log(response.data)
        this.tweet = Autolinker.link(response.data[0].text, { mention: 'twitter', hashtag: 'twitter' })
        this.show = true
      })
      .catch(e => {
        console.error(e)
        this.tweet = "Hmm... for some reason I can't reach my twitter account."
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#container {
  position: relative;
  height: 100px;
  width: 400px;
  line-height: 100px;
  text-align: center;
  left: 50%;
  margin-left: -200px;
}
#tweet {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
#logo {
  display: inline-block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: url('assets/logo.png');
  width: 200px;
  height: 200px;
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: default;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
