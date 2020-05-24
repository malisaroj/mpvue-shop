// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  added: [],
  all: [
    {
      id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
      name: 'COBOL 101 vintage',
      description: 'Learn COBOL with this vintage programming book',
      thumbnail: '/static/images/user.png',
      price: 399
    },
    {
      id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
      name: 'Sharp C2719 curved TV',
      description: 'Watch TV like never before with the brand new curved screen technology',
      thumbnail: '/static/images/user.png',
      price: 1995
    },
    {
      id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
      name: 'Remmington X mechanical keyboard',
      description: 'Excellent for gaming and typing, this Remmington X keyboard ' +
                'features tactile, clicky switches for speed and accuracy',
      thumbnail: '/static/images/user.png',

      price: 595
    }
  ]
}

// getters
const getters = {
  allProducts: state => state.all, // would need action/mutation if data fetched async
  getNumberOfProducts: state => (state.all) ? state.all.length : 0,
  cartProducts: state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.all.find(p => p.id === id)

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
}

// actions
const actions = {
  addToCart ({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  },
  removeFromCart ({ commit }, product) {
    commit(types.REMOVE_FROM_CART, {
      id: product.id
    })
  }
}

// mutations
const mutations = {

  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)
    console.log(id)

    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.REMOVE_FROM_CART] (state, { id }) {
    console.log(id)
    const index = state.added.indexOf(id)
    const record = state.added.find(p => p.id === id)
    if (record.quantity > 1) {
      record.quantity--
    }

    else if (record.quantity === 1) {
      state.added.splice(index, 1)
    }
  }
}

// one store for entire application
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
})
