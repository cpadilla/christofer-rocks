<template>
  <div id="About">
    <ul>
        <div class="text">
            <p>
                My name is Christofer Padilla and my three main passions in life are programming, art and music.
            </p>
            <p>
                I would consider myself an artist first and foremost.
            </p>
            <p>
                I have a lot of hobbies and interest which include rockclimbing, skateboarding, reading, drawing, playing guitar, making video games, yoga and collecting vinyls.
            </p>
            <p>
                This website is for hosting my portofilio and is part of it itself! You can check out the source code for it <a href="https://github.com/cpadilla/christofer-rocks">here</a>. I'm using the free github pages hosting so I made the site a Single Page Application using Vue.js. The text at the top uses the Twitter API to fetch my latest tweet and the Art and Blog tabs use the Tumblr API, where I'm hosting them.
            </p>
            <p>
                If you have any questions, would like a copy of my resume, or just want to give a shout out, you can shoot me an email at <a href="mailto:christoferpadilla@gmail.com">christoferpadilla@gmail.com</a>
            </p>
        </div>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Art',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.text {
  display: inline-block;
  text-align: center;
  /* width: 500px; */
  padding: 10px 100px;
  width: 100%;
  max-width: 50vw;
}

ul {
    padding: 0;
}
</style>
