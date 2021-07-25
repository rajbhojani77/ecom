<template>
  <v-toolbar dark color="blue darken-3" class="mb-1">
    <v-text-field
      v-model="search"
      clearable
      flat
      @change="getAllProducts"
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search Product"
    ></v-text-field>
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-spacer></v-spacer>
      <v-select
        v-model="selectedCategory"
        flat
        @change="getAllProducts"
        solo-inverted
        hide-details
        :items="category"
        prepend-inner-icon="mdi-magnify"
        label="Category"
      ></v-select>
      <v-spacer></v-spacer>
      <v-row justify="center">
        <v-col class="px-4" sm="2">
          <span class="align-center">Price:</span>
        </v-col>
        <v-col class="px-4" sm="10">
          <v-range-slider
            v-model="range"
            :max="max"
            @change="getAllProducts"
            :min="min"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              {{ range[0] }}
            </template>
            <template v-slot:append>
              {{ range[1] }}
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <home-add-product />
      <home-add-category />
    </template>
  </v-toolbar>
</template>
<script>
import common from "@/mixins/common.js";
export default {
  mixins: [common],
  data() {
    return {
      min: 0,
      max: 9999
    };
  }
};
</script>
