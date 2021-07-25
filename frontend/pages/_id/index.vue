<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 class="pt-md-4">
      <v-card class="mx-auto" max-width="80%">
        <v-img
           :src="product.image"
        ></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            {{ product.name }}
          </h2>
          <span class="title">NetPrice : ${{ product.netprice }}</span> &nbsp
          </br>
           <span class="title">Price :<del class=""> ${{ product.price }}</del></span>
           </br>
           <h3>{{product.discount}}% Discount</h3>
           </br>
          <p>{{product.discription}}</p>
        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  middleware: "isAuthenticated",
  async asyncData({ store, params }) {
    await store.dispatch("getProduct", params.id);
  },
  computed: {
    product() {
      return this.$store.getters.getProduct;
    }
  }
};
</script>
