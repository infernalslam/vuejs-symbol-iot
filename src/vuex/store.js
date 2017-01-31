/*eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var textB1 = '00000'
var textB2 = '00000'
var textB3 = '00000'
var textB4 = '00000'
var textB5 = '00000'
var textB6 = '00000'
var textB7 = '00000'
var textB8 = '00000'
const state = {
  view: [
    {
      pin: '1,0',
      value: 0,
      toggle: false
    },
    {
      pin: '1,1',
      value: 0,
      toggle: false
    },
    {
      pin: '1,2',
      value: 0,
      toggle: false
    },
    {
      pin: '1,3',
      value: 0,
      toggle: false
    },
    {
      pin: '1,4',
      value: 0,
      toggle: false
    },
    {
      pin: '2,0',
      value: 0,
      toggle: false
    },
    {
      pin: '2,1',
      value: 0,
      toggle: false
    },
    {
      pin: '2,2',
      value: 0,
      toggle: false
    },
    {
      pin: '2,3',
      value: 0,
      toggle: false
    },
    {
      pin: '2,4',
      value: 0,
      toggle: false
    },
    {
      pin: '3,0',
      value: 0,
      toggle: false
    },
    {
      pin: '3,1',
      value: 0,
      toggle: false
    },
    {
      pin: '3,2',
      value: 0,
      toggle: false
    },
    {
      pin: '3,3',
      value: 0,
      toggle: false
    },
    {
      pin: '3,4',
      value: 0,
      toggle: false
    },
    {
      pin: '4,0',
      value: 0,
      toggle: false
    },
    {
      pin: '4,1',
      value: 0,
      toggle: false
    },
    {
      pin: '4,2',
      value: 0,
      toggle: false
    },
    {
      pin: '4,3',
      value: 0,
      toggle: false
    },
    {
      pin: '4,4',
      value: 0,
      toggle: false
    },
    {
      pin: '5,0',
      value: 0,
      toggle: false
    },
    {
      pin: '5,1',
      value: 0,
      toggle: false
    },
    {
      pin: '5,2',
      value: 0,
      toggle: false
    },
    {
      pin: '5,3',
      value: 0,
      toggle: false
    },
    {
      pin: '5,4',
      value: 0,
      toggle: false
    },
    {
      pin: '6,0',
      value: 0,
      toggle: false
    },
    {
      pin: '6,1',
      value: 0,
      toggle: false
    },
    {
      pin: '6,2',
      value: 0,
      toggle: false
    },
    {
      pin: '6,3',
      value: 0,
      toggle: false
    },
    {
      pin: '6,4',
      value: 0,
      toggle: false
    },
    {
      pin: '7,0',
      value: 0,
      toggle: false
    },
    {
      pin: '7,1',
      value: 0,
      toggle: false
    },
    {
      pin: '7,2',
      value: 0,
      toggle: false
    },
    {
      pin: '7,3',
      value: 0,
      toggle: false
    },
    {
      pin: '7,4',
      value: 0,
      toggle: false
    },
    {
      pin: '8,0',
      value: 0,
      toggle: false
    },
    {
      pin: '8,1',
      value: 0,
      toggle: false
    },
    {
      pin: '8,2',
      value: 0,
      toggle: false
    },
    {
      pin: '8,3',
      value: 0,
      toggle: false
    },
    {
      pin: '8,4',
      value: 0,
      toggle: false
    }
  ],
  editorOption: {
    mode: 'text/x-csrc',
    theme: 'dracula',
    tabSize: 2,
    lineNumbers: true,
    line: true,
    keyMap: 'sublime',
    extraKeys: { 'Ctrl': 'autocomplete' },
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    styleSelectedText: true,
    highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
  },
  code: `#include <LiquidCrystal.h>
LiquidCrystal lcd(12, 14, 2, 0, 4, 5);

byte customChar[] = {
  B` + textB1 + `,
  B` + textB2 + `,
  B` + textB3 + `,
  B` + textB4 + `,
  B` + textB5 + `,
  B` + textB6 + `,
  B` + textB7 + `,
  B` + textB8 + `
};

const int pin = 0;

void setup() {
  lcd.begin(16, 2);
  lcd.createChar(0, customChar);
  lcd.home();
  lcd.write(pin);
}

void loop() { }`
  // textB1: '00000',
  // textB2: '00000',
  // textB3: '00000',
  // textB4: '00000',
  // textB5: '00000',
  // textB6: '00000',
  // textB7: '00000',
  // textB8: '00000'
}

  /* mutations */
const mutations = {
  toggle: (state, index) => {
    var location = state.view.map((item) => item.pin).indexOf(index)
    if (state.view[location].toggle === true) {
      state.view[location].toggle = false
      state.view[location].value = 0
      // if (state.view[location].pin.charAt(0) === '1') {
      //   let text = textB1.split('')
      //   text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
      //   textB1 = text.join('')
      //   console.log(textB1)
      // }
    } else if (state.view[location].toggle === false) {
      state.view[location].toggle = true
      state.view[location].value = 1
      // if (state.view[location].pin.charAt(0) === '1') {
      //   let text = textB1.split('')
      //   text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
      //   textB1 = text.join('')
      //   console.log(textB1)
      //   console.log(state.code)
      // }
    }
  }
}

/* getters */
const getters = {
  view: state => state.view
}

/* actions */
const actions = {
  toggle: (state, index) => {
    store.commit('toggle', index)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
