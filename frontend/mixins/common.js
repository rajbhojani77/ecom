export default {
  async asyncData({ store, params }) {
    const filter = { name: "", category: "", range: [0, 9999] };
    await store.dispatch("getAllProducts", filter);
    await store.dispatch("getAllCategory");
  },
  data() {
    return {
      search: "",
      selectedCategory: "",
      range: [0, 9999]
    };
  },
  computed: {
    category() {
      return this.$store.getters.getCategory;
    },
    items() {
      return this.$store.getters.getProducts;
    }
  },
  methods: {
    async getAllProducts() {
      const filter = {
        name: this.search,
        category: this.selectedCategory,
        range: this.range
      };
      await this.$store.dispatch("getAllProducts", filter);
    },
    async deleteProduct(id) {
      await this.$store.dispatch("deletetProduct", id);
      this.getAllProducts();
    }
  }
};
