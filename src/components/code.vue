<template lang="html">
  <div>
    <codemirror v-model="store.state.code" :options="store.state.editorOption"></codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import store from '../vuex/store.js'
export default {
  name: 'code',
  components: {
    codemirror
  },
  data () {
    return {
      store
    }
  }
}
</script>

<style lang="css">
.CodeMirror {
  height: auto !important;
}
</style>
