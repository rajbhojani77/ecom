export default {
  async getAllCategory({ commit }) {
    await this.$axios
      .$get("/api/category")
      .then(response => {
        commit("setCategory", response.category);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async addCategory({ commit }, data) {
    await this.$axios
      .$post("/api/category", data)
      .then(response => {
        console.log(response);
        return response.status;
      })
      .catch(error => {
        return "error";
      });
  },
  async getAllProducts({ commit },data) {
    await this.$axios
      .$get("/api/products", {params:data})
      .then(response => {
        console.log(response);
        commit("setProducts", response.products);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async getProduct({ commit }, id) {
    await this.$axios
      .$get("/api/product/" + id)
      .then(response => {
        commit("setProduct", response.product);
      })
      .catch(error => {
        console.log(error);
      });
  },
  async addProduct({ commit }, data) {
    await this.$axios
      .$post("/api/product", data)
      .then(response => {
        return response.status;
      })
      .catch(error => {
        return "error";
      });
  },
  async editProduct({ commit }, data) {
    await this.$axios
      .$put("/api/product", data)
      .then(response => {
        console.log(response);
        return response.status;
      })
      .catch(error => {
        return "error";
      });
  },
  async deletetProduct({ commit }, id) {
    await this.$axios
      .$delete("/api/product/" + id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
