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
    <table>
      <tr>
        <td id="empty">
        </td>
        <td>
          <a @mouseover="hovering1 = true" @mouseleave="hovering1 = false" href="#" @click="currentView='Art'">
            Art
          </a>
        </td>
        <td>
          <a @mouseover="hovering2 = true" @mouseleave="hovering2 = false" href="#" @click="currentView='Games'">
            Games
          </a>
        </td>
        <td>
          <a @mouseover="hovering3 = true" @mouseleave="hovering3 = false" href="#" @click="currentView='Blog'">
            Blog
          </a>
        </td>
        <td>
          <a @mouseover="hovering4 = true" @mouseleave="hovering4 = false" href="#" @click="currentView='About'">
            About
          </a>
        </td>
        <td id="empty">
        </td>
      </tr>
      <tr class="underscore-row">
        <td id="empty">
        </td>
        <td>
          <transition name="custom-classes-transition"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown">
            <div v-show="hovering1" id="underscore"/>
          </transition>
        </td>
        <td>
          <transition name="custom-classes-transition"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown">
            <div v-show="hovering2" id="underscore"/>
          </transition>
        </td>
        <td>
          <transition name="custom-classes-transition"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown">
            <div v-show="hovering3" id="underscore"/>
          </transition>
        </td>
        <td>
          <transition name="custom-classes-transition"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown">
            <div v-show="hovering4" id="underscore"/>
          </transition>
        </td>
        <td id="empty">
        </td>
      </tr>
    </table>
    <component :is="currentView"></component>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'Vue'
import axios from 'axios'
import Art from './components/Art.vue'
import Games from './components/Games.vue'
import Blog from './components/Blog.vue'
import About from './components/About.vue'
import Autolinker from 'Autolinker'

Vue.component('Art', require('./components/Art.vue'))

export default {
  name: 'App',
  // eslint-disable-next-line
  data () {
    return {
      hovering1: false,
      hovering2: false,
      hovering3: false,
      hovering4: false,
      tweet: '...',
      show: false,
      currentView: 'div'
    }
  },
  components: {Art: Art, Games: Games, Blog: Blog, About: About},
  watch: {
    tweet: function (newValue, oldValue) {
      this.show = true
    }
  },
  // Fetches Twitter tweets when component is created.
  created () {
    var config = {
      headers: {
        'Authorization': 'OAuth oauth_consumer_key="OXkNIcCUl2D6cBJ6XDoOVN5ky",oauth_token="88245391-BenOOM9aVnVoxCJbCSUIejlqMy7TURat3EnHQTo9o",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1518936503",oauth_nonce="UVQFOEOKAaR",oauth_version="1.0",oauth_signature="dCM9%2B8e3XAS%2BA5RyV%2Bih%2BBtRZPw%3D"',
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
        this.tweet = Autolinker.link("Hi! Welcome to my website! Follow me on twitter @rockzombie2 and catch me live at https://twitch.tv/rockzombie2", { mention: 'twitter', hashtag: 'twitter' })
      })
  }
}

// Vue.component('Art', {
//   template: '#Art'
// })
</script>

<style scoped>
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
#underscore {
  height: 3px;
  width: 100%;
  /* display: inline-block; */
  background: url('assets/underscore.png');
  margin-top: 10px;
}
#empty {
  height: 13px;
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
table {
  padding-top: 20px;
  display: table;
  margin: 0 auto;
}
td {
  width: 100px;
  padding: 0px 20px;
}
ul {
  min-width: 300px;
  list-style: none;
  list-style-type: none;
  /* padding: 20px 0px; */
}
li {
  display: inline;
  margin: 0 10px;
  padding: 0px 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  font-size: x-large;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
