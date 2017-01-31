<template>
  <div id="app">
    <div class="container">
      <h2>LCD Custom Character Generator
      Support character lcd and create code for Arduino. </h2>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-4"><pin></pin></div>
        <div class="col-xs-8"><code-view></code-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import Pin from './components/pin.vue'
import CodeView from './components/code.vue'
export default {
  name: 'app',
  components: {
    Pin,
    CodeView
  }
}
</script>

<style>
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

</style>
