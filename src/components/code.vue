<template lang="html">
  <div>
    <codemirror v-model="codefinal" :options="store.state.editorOption"></codemirror>
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
      store,
      code: '',
      codeTop: `#include <LiquidCrystal.h>
LiquidCrystal lcd(12, 14, 2, 0, 4, 5);
const int pin = 0;

byte customChar[] = {`,
      codeFooter: `void setup() {
  lcd.begin(16, 2);
  lcd.createChar(0, customChar);
  lcd.home();
  lcd.write(pin);
}

void loop() {}`
    }
  },
  mounted () {
    this.code = this.codeTop + '\n  B' + store.state.textB1 + ', ' +
    '\n  B' + store.state.textB2 + ', ' +
    '\n  B' + store.state.textB3 + ', ' +
    '\n  B' + store.state.textB4 + ', ' +
    '\n  B' + store.state.textB5 + ', ' +
    '\n  B' + store.state.textB6 + ', ' +
    '\n  B' + store.state.textB7 + ', ' +
    '\n  B' + store.state.textB8 + '\n} ' +
    '\n' + this.codeFooter
  },
  computed: {
    codefinal () {
      this.code = this.codeTop + '\n  B' + store.state.textB1 + ', ' +
      '\n  B' + store.state.textB2 + ', ' +
      '\n  B' + store.state.textB3 + ', ' +
      '\n  B' + store.state.textB4 + ', ' +
      '\n  B' + store.state.textB5 + ', ' +
      '\n  B' + store.state.textB6 + ', ' +
      '\n  B' + store.state.textB7 + ', ' +
      '\n  B' + store.state.textB8 + '\n} ' +
      '\n' + this.codeFooter
      return this.code
    }
  }
}
</script>

<style lang="css">
.CodeMirror {
  height: auto !important;
}
</style>
