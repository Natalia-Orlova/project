export default {
  state: {
    counter: 0,
    cartItems: []
  },
  getters: {
    countProducts (state) {
      return state.cartItems.length
    },
    totalPrice (state) {
      return state.cartItems.reduce(
        (total, product) => total + product.price,
        0
      )
    },
    cartItems (state) {
      return state.cartItems
    }
  },
  mutations: {
    SET_CART (state, productList) {
      state.cartItems = productList
    },
    ADD_TO_CART (state, product) {
      state.cartItems.push(product)
    },
    INCREMENT (state) {
      state.counter++
    },
    DECREMENT (state) {
      state.counter--
    }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        commit('SET_CART', [
          {
            id: 1,
            name: 'apple',
            price: 15,
            count: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aut.'
            // showDesc: false
          },
          {
            id: 2,
            name: 'orange',
            price: 20,
            count: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aut.'
            // showDesc: false
          },
          {
            id: 3,
            name: 'tangerine',
            price: 35,
            count: 1,
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aut.'
            // showDesc: false
          }
        ])
      }, 1500)
    }
  }
}
