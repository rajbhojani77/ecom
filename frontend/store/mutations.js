export default {
  setCategory(state, data) {
    if (data) {
      state.category = data
    } else {
      state.category = []
    }
  },
  setProducts(state, data) {
    if (data) {
      state.products = data
    } else {
      state.products = []
    }
  },
  setProduct(state, data) {
    if (data) {
      state.product = data
    } else {
      state.product = null
    }
  }
}
