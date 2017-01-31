<template>
  <div id="app">
    <div class="container">
      <h2> <b> LCD Custom Character Generator </b></h2> <br>
      <h3>Support character lcd and create code for Arduino. </h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <pin></pin> <br>
          <button style="margin-left: 45%;" @click="store.commit('clear')">Clear</button>
        </div>
        <div class="col-xs-8"><code-view></code-view></div>
      </div>

      <div class="footer">
        <div class="footer-description2">
        Built with <a href="https://github.com/vuejs/vue" target="_blank" class="footer-link-description">Vuejs</a>
        <img src="../static/Vuejs.png" class="footer-logo" alt="Vue Logo">
       </div>
     </div>
</template>

<script>
import Pin from './components/pin.vue'
import CodeView from './components/code.vue'
import store from './vuex/store.js'
export default {
  name: 'app',
  components: {
    Pin,
    CodeView
  },
  data () {
    return {
      store
    }
  }
}
</script>

<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 100;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff");
}
body {
  font-family: "San Francisco";
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.box-char.green {
    background: #81C784;
    text-align: center;
}

.dot-px {
    width: 32px;
    height: 32px;
    margin: 2px;
    border: #FFF 1px solid;
    display: inline-block;
}

.green .high {
    background: #1B5E20;
    border-color: #1B5E20;
}
.footer-description2 {
    text-align: center;
    padding-bottom: 5px;
}

.footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

button {
  background: #fff;
  border: 1px #ccc solid;
  border-radius: 5px;
  outline: 0;
}
button:active {
background: -moz-linear-gradient(top,  #06f 0%, #00f 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#06f), color-stop(100%,#00f)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top,  #06f 0%,#00f 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top,  #06f 0%,#00f 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top,  #06f 0%,#00f 100%); /* IE10+ */
background: linear-gradient(to bottom,  #06f 0%,#00f 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#06f', endColorstr='#00f',GradientType=0 ); /* IE6-9 */
  border: 1px #000000 solid;
}

</style>
