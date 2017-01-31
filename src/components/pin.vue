<template lang="html">
  <div class="box-char-pic">
    <div class="box-char green">
      <div class="col">
        <div class="dot-px" @click="toggle('1,0')" :class="{ active: store.state.view[0].toggle}"></div> <!-- 1,0 -->
        <div class="dot-px" @click="toggle('1,1')" :class="{ active: store.state.view[1].toggle}"></div> <!-- 1,1 -->
        <div class="dot-px" @click="toggle('1,2')" :class="{ active: store.state.view[2].toggle}"></div> <!-- 1,2 -->
        <div class="dot-px" @click="toggle('1,3')" :class="{ active: store.state.view[3].toggle}"></div> <!-- 1,3 -->
        <div class="dot-px" @click="toggle('1,4')" :class="{ active: store.state.view[4].toggle}"></div> <!-- 1,4 -->
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('2,0')" :class="{ active: store.state.view[5].toggle}"></div>
        <div class="dot-px" @click="toggle('2,1')" :class="{ active: store.state.view[6].toggle}"></div>
        <div class="dot-px" @click="toggle('2,2')" :class="{ active: store.state.view[7].toggle}"></div>
        <div class="dot-px" @click="toggle('2,3')" :class="{ active: store.state.view[8].toggle}"></div>
        <div class="dot-px" @click="toggle('2,4')" :class="{ active: store.state.view[9].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('3,0')" :class="{ active: store.state.view[10].toggle}"></div>
        <div class="dot-px" @click="toggle('3,1')" :class="{ active: store.state.view[11].toggle}"></div>
        <div class="dot-px" @click="toggle('3,2')" :class="{ active: store.state.view[12].toggle}"></div>
        <div class="dot-px" @click="toggle('3,3')" :class="{ active: store.state.view[13].toggle}"></div>
        <div class="dot-px" @click="toggle('3,4')" :class="{ active: store.state.view[14].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('4,0')" :class="{ active: store.state.view[15].toggle}"></div>
        <div class="dot-px" @click="toggle('4,1')" :class="{ active: store.state.view[16].toggle}"></div>
        <div class="dot-px" @click="toggle('4,2')" :class="{ active: store.state.view[17].toggle}"></div>
        <div class="dot-px" @click="toggle('4,3')" :class="{ active: store.state.view[18].toggle}"></div>
        <div class="dot-px" @click="toggle('4,4')" :class="{ active: store.state.view[19].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('5,0')" :class="{ active: store.state.view[20].toggle}"></div>
        <div class="dot-px" @click="toggle('5,1')" :class="{ active: store.state.view[21].toggle}"></div>
        <div class="dot-px" @click="toggle('5,2')" :class="{ active: store.state.view[22].toggle}"></div>
        <div class="dot-px" @click="toggle('5,3')" :class="{ active: store.state.view[23].toggle}"></div>
        <div class="dot-px" @click="toggle('5,4')" :class="{ active: store.state.view[24].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('6,0')" :class="{ active: store.state.view[25].toggle}"></div>
        <div class="dot-px" @click="toggle('6,1')" :class="{ active: store.state.view[26].toggle}"></div>
        <div class="dot-px" @click="toggle('6,2')" :class="{ active: store.state.view[27].toggle}"></div>
        <div class="dot-px" @click="toggle('6,3')" :class="{ active: store.state.view[28].toggle}"></div>
        <div class="dot-px" @click="toggle('6,4')" :class="{ active: store.state.view[29].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('7,0')" :class="{ active: store.state.view[30].toggle}"></div>
        <div class="dot-px" @click="toggle('7,1')" :class="{ active: store.state.view[31].toggle}"></div>
        <div class="dot-px" @click="toggle('7,2')" :class="{ active: store.state.view[32].toggle}"></div>
        <div class="dot-px" @click="toggle('7,3')" :class="{ active: store.state.view[33].toggle}"></div>
        <div class="dot-px" @click="toggle('7,4')" :class="{ active: store.state.view[34].toggle}"></div>
      </div>
      <div class="col">
        <div class="dot-px" @click="toggle('8,0')" :class="{ active: store.state.view[35].toggle}"></div>
        <div class="dot-px" @click="toggle('8,1')" :class="{ active: store.state.view[36].toggle}"></div>
        <div class="dot-px" @click="toggle('8,2')" :class="{ active: store.state.view[37].toggle}"></div>
        <div class="dot-px" @click="toggle('8,3')" :class="{ active: store.state.view[38].toggle}"></div>
        <div class="dot-px" @click="toggle('8,4')" :class="{ active: store.state.view[39].toggle}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'pin',
  data () {
    return {
      store
    }
  },
  methods: {
    toggle (index) {
      store.commit('toggle', index)
    }
  }
}
</script>

<style lang="css">

.active {
    background: #1B5E20;
    border-color: #1B5E20;
}
</style>
