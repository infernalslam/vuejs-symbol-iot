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
        <div class="star"> <!-- Place this tag where you want the button to render. -->
          <!-- Place this tag where you want the button to render. -->
          <a class="github-button" href="https://github.com/infernalslam" data-style="mega" data-count-href="/infernalslam/followers" data-count-api="/users/infernalslam#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @infernalslam on GitHub">Follow @infernalslam</a>
          <a class="github-button" href="https://github.com/infernalslam/vuejs-symbol-iot" data-style="mega" aria-label="Star infernalslam/vuejs-symbol-iot on GitHub">Star</a>
          <!-- Place this tag where you want the button to render. -->
          <a class="github-button" href="https://github.com/infernalslam/vuejs-symbol-iot/issues" data-style="mega" data-count-api="/repos/infernalslam/vuejs-symbol-iot#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue infernalslam/vuejs-symbol-iot on GitHub">Issue</a>
        </div>
        <div class="footer-description2">
        Built with <a href="https://github.com/vuejs/vue" target="_blank" class="footer-link-description">Vuejs</a>
        <img src="../static/Vuejs.png" class="footer-logo" alt="Vue Logo">
        And
        <a href="https://github.com/surmon-china/vue-codemirror" target="_blank" class="footer-link-description">Vuejs</a>
        <img src="../static/code.png" style="width: 31.99px; height: 31.99px;"class="footer-logo" alt="Vue Logo">
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
  background: rgba(255,255,255,1);
background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 42%, rgba(189,182,189,1) 91%, rgba(189,182,189,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(42%, rgba(246,246,246,1)), color-stop(91%, rgba(189,182,189,1)), color-stop(100%, rgba(189,182,189,1)));
background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 42%, rgba(189,182,189,1) 91%, rgba(189,182,189,1) 100%);
background: -o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 42%, rgba(189,182,189,1) 91%, rgba(189,182,189,1) 100%);
background: -ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 42%, rgba(189,182,189,1) 91%, rgba(189,182,189,1) 100%);
background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 42%, rgba(189,182,189,1) 91%, rgba(189,182,189,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#bdb6bd', GradientType=1 );
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  margin-top: 60px;
}

.box-char.green {
  background: rgba(210,255,82,1);
background: -moz-linear-gradient(left, rgba(210,255,82,1) 0%, rgba(114,194,39,1) 42%, rgba(114,194,39,1) 100%);
background: -webkit-gradient(left top, right top, color-stop(0%, rgba(210,255,82,1)), color-stop(42%, rgba(114,194,39,1)), color-stop(100%, rgba(114,194,39,1)));
background: -webkit-linear-gradient(left, rgba(210,255,82,1) 0%, rgba(114,194,39,1) 42%, rgba(114,194,39,1) 100%);
background: -o-linear-gradient(left, rgba(210,255,82,1) 0%, rgba(114,194,39,1) 42%, rgba(114,194,39,1) 100%);
background: -ms-linear-gradient(left, rgba(210,255,82,1) 0%, rgba(114,194,39,1) 42%, rgba(114,194,39,1) 100%);
background: linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(114,194,39,1) 42%, rgba(114,194,39,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#72c227', GradientType=1 );
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

.star {
  position: absolute;
left: 40%;
bottom: 124%;
right: 0;
margin-left: auto;
margin-right: auto;
}
</style>
