<template>
  <h1>Video Player</h1>
  <!-- if video.mp4 put in src/, <video src="./video.mp4"> -->
  <video id="player" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" controls>
  </video>
</template>

<script>
import 'plyr/dist/plyr.css'
import Plyr from 'plyr'

export default {
  data () {
    return {
      player: {}
    }
  },
  mounted () {
    this.player = new Plyr(document.getElementById('player'))
  }
}
</script>
