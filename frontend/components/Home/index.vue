<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      hide-default-footer
    >
      <template v-slot:header>
        <home-filters />
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-img
                contain
                class="white--text"
                height="300px"
                :src="item.image"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <!--                   <span class="headline"></span> -->
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div class="mx-5">
                  <span class="title blue--text">{{ item.name }}</span
                  ><br />
                  <v-rating
                    readonly
                    small
                    dense
                    background-color="orange"
                    color="orange"
                    v-model="rating"
                  ></v-rating>
                  <span class="title"> ${{ item.netprice }}</span> &nbsp
                  <del class=""> ${{ item.price }}</del>
                </div>
              </v-card-title>
              <v-card-actions>
                <home-edit-product :product="item" />
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="red"
                  @click="deleteProduct(item._id)"
                >
                  <v-icon dark>
                    mdi-delete
                  </v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark color="teal" :to="'/' + item._id">
                  <v-icon dark>
                    mdi-format-list-bulleted-square
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import common from "@/mixins/common.js";
export default {
  mixins: [common],
  data() {
    return {
      rating: 5,
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 4
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>
