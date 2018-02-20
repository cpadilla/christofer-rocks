<template>
  <div id="Game">
    <ul>
        <div class="game-data" v-for="repo in repos" :key="repo.name">
            <div class="game-container">
              <div class="game-container-inner">
                  <!-- The preiew image -->
                  <div class="preview-container">
                    <img class="preview" :src="repo.src"/>
                  </div>
                  <!-- <img src="../assets/placeholder.png"/> -->
                  <div class="overlay-container">
                    <div class="overlay">
                      <div class="inner-overlay">
                        <div class="link">
                          <a :href="repo.github" target="_blank">
                            <img class="github image" src="../assets/github-icon.svg"/>
                          </a>
                        </div>
                        <div class="link">
                          <a :href="repo.link" target="_blank">
                            <img class="download image" src="../assets/download.png"/>
                          </a>
                        </div>
                        <!-- <div class="text">
                          {{ repo.link }}
                        </div> -->
                      </div>
                    </div>
                  </div>
                <div class="name">
                  {{ repo.name }}
                </div>
              </div>
            </div>
        </div>
    </ul>

  </div>
</template>

<script>
// import pic from '@/assets/logo.png'
// import axios from 'axios'
var images = require.context('../assets', false, /.png$/)

export default {
  name: 'Blog',
  data () {
    return {
      i: '',
      repos: [
        { name: 'Code Day Visualizer 2014',
          github: 'https://github.com/cpadilla/CodeDayVisualizer2014',
          link: 'https://github.com/cpadilla/CodeDayVisualizer2014/archive/master.zip',
          src: require('../assets/CodeDayVisualizer2014.png')},
        { name: 'Lovecraft',
          github: 'https://github.com/cpadilla/Lovecraft',
          link: 'https://github.com/cpadilla/Lovecraft/archive/master.zip',
          src: require('../assets/Lovecraft.png')},
        { name: 'Blockade Runner',
          github: 'https://github.com/cpadilla/Blockade-Runner',
          link: 'https://github.com/cpadilla/Blockade-Runner/archive/master.zip',
          src: require('../assets/Blockade Runner.png')},
        { name: 'Final Resistance Capsule',
          github: 'https://github.com/cpadilla/frc1',
          link: 'https://github.com/cpadilla/frc1/archive/master.zip',
          src: require('../assets/FRC.png')}
      ]
    }
  },
  methods: {
    getImgUrl (path) {
      // return images('./' + path)
      return path
    },
    logsrc (source) {
      console.log(images)
      console.log(source)
    }
  },
  checkTag (name) {

  },
  created () {
    // const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    // const url = 'https://api.github.com/users/cpadilla/repos'
    // axios.get(proxyurl + url)
    //   .then(response => {
    //     // Json responses are automatically parsed
    //     console.log(response.data)
    //     var i
    //     for (i = 0; i < response.data.length; i++) {
    //       const newUrl = 'https://api.github.com/repos/cpadilla/' + response.data[i].name + '/topics'
    //       axios.get(newUrl)
    //         .then(response2 => {
    //           console.log(response2)
    //           if (response2.data.names.includes('game')) {
    //             this.repos = response.data
    //           }
    //         })
    //     }
    //     // this.repos = response.data
    //   })
    //   .catch(e => {
    //     console.error(e)
    //     this.link = 'There was an error connecting to tumblr'
    //   })
  }
}
</script>

<style scoped>
.game-data {
  display: inline-block;
}

.game-container {
  margin: 0px auto;
  width: 500px; /* display: inline-block; */
  text-align: center;
  /* width: 500px; */
  padding: 10px 0px;
  max-width: 60vw;
}

.game-container-inner {
  overflow: hidden;
  text-align: center;
  position: relative;
  border: 1px solid black;
}

.game-container-inner:hover .overlay {
  opacity: .8;
}

.image {
  height: 100px;
  width: 100px;
}

.preview-container {
  height: 300px;
  overflow: hidden;
}

.preview {
  height: 100%;
}

.link {
  position: relative;
  text-align: center;
  display: grid;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  align-items: center;
  transition: transform .5s;
}

.link:hover {
  transform: scale(1.2);
}

.download {
  height: 150px;
  width: 124px;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50);
  -ms-transform: translate(-50%, -50);
  text-align: center;
}

.preview-container {
  display: inline-block;
}

.overlay-container {
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #ffffff;
}

.inner-overlay {
  display: flex;
  height: 100%;
  width: 100%;
}

.link-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #666666;
}

.name {
  padding: 10px 0px;
}

.img {
    height: 100%;
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
} */

/* img {
  width: 100%;
  height: 100%;
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

/* img {
  width: 100%;
  height:100%;
} */
</style>
