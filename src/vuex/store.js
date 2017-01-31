/*eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

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
  textB1: '00000',
  textB2: '00000',
  textB3: '00000',
  textB4: '00000',
  textB5: '00000',
  textB6: '00000',
  textB7: '00000',
  textB8: '00000'
}

  /* mutations */
const mutations = {
  toggle: (state, index) => {
    var location = state.view.map((item) => item.pin).indexOf(index)
    if (state.view[location].toggle === true) {
      state.view[location].toggle = false
      state.view[location].value = 0
      if (state.view[location].pin.charAt(0) === '1') {
        let text = state.textB1.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB1 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '2') {
        let text = state.textB2.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB2 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '3') {
        let text = state.textB3.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB3 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '4') {
        let text = state.textB4.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB4 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '5') {
        let text = state.textB5.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB5 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '6') {
        let text = state.textB6.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB6 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '7') {
        let text = state.textB7.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB7 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '8') {
        let text = state.textB8.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB8 = text.join('')
      }
    } else if (state.view[location].toggle === false) {
      state.view[location].toggle = true
      state.view[location].value = 1
      if (state.view[location].pin.charAt(0) === '1') {
        let text = state.textB1.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB1 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '2') {
        let text = state.textB2.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB2 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '3') {
        let text = state.textB3.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB3 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '4') {
        let text = state.textB4.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB4 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '5') {
        let text = state.textB5.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB5 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '6') {
        let text = state.textB6.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB6 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '7') {
        let text = state.textB7.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB7 = text.join('')
      }
      if (state.view[location].pin.charAt(0) === '8') {
        let text = state.textB8.split('')
        text[parseInt(state.view[location].pin.charAt(2))] = state.view[location].value
        state.textB8 = text.join('')
      }
    }
  },
  clear: (state) => {
    state.textB1 = '00000'
    state.textB2 = '00000'
    state.textB3 = '00000'
    state.textB4 = '00000'
    state.textB5 = '00000'
    state.textB6 = '00000'
    state.textB7 = '00000'
    state.textB8 = '00000'
    state.view = [
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
    ]
  }
}

/* getters */
const getters = {}

/* actions */
const actions = {
  toggle: (state, index) => {
    store.commit('toggle', index)
  },
  clear: (state) => {
    store.commit('clear')
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
