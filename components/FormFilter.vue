<template>
  <div>
    <v-form ref="form" lazy-validation @submit.prevent="submitFilter">
      <v-card class="mx-auto pa-4" min-width="344">
        <div class="mb-8">
          <span class="subtitle-1">Brand</span>
          <v-checkbox
            v-model="brands"
            label="Bosch"
            color="primary"
            value="Bosch"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="brands"
            label="Ryu"
            color="primary"
            value="Ryu"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="brands"
            label="Tekiro"
            color="primary"
            value="Tekiro"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="brands"
            label="Livi"
            color="primary"
            value="Livi"
            hide-details
          ></v-checkbox>
        </div>
        <div>
          <span class="subtitle-1">Harga</span>
          <v-text-field
            v-model="minPrice"
            label="Min"
            prefix="Rp"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="maxPrice"
            label="Max"
            prefix="Rp"
            outlined
          ></v-text-field>
        </div>
        <div>
          <v-btn block color="error" elevation="1" type="submit"
            >Terapkan</v-btn
          >
        </div>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FormFilter",
  computed: {
    ...mapGetters("api", {
      dataFilter: "getDataFilter",
    }),
    brands: {
      get() {
        return this.dataFilter.brands;
      },
      set(val) {
        this.$store.commit("api/setDataFilter", { brands: val });
      },
    },
    minPrice: {
      get() {
        return this.dataFilter.minPrice;
      },
      set(val) {
        this.$store.commit("api/setDataFilter", { minPrice: val });
      },
    },
    maxPrice: {
      get() {
        return this.dataFilter.maxPrice;
      },
      set(val) {
        this.$store.commit("api/setDataFilter", { maxPrice: val });
      },
    },
  },
  methods: {
    submitFilter() {},
  },
};
</script>

<style>
</style>