<template>
  <v-card class="mx-auto" width="200" height="240">
    <v-img src="/base-image.png" aspect-ratio="1.7" contain> </v-img>
    <div class="pa-2">
      <div class="subtitle-2 mb-auto content-title">{{ productName }}</div>
      <div class="card-bottom flex-column align-self-end">
        <div class="subtitle-1 red--text">Rp {{ formatAmount(priceAmount) }}</div>
        <div class="caption">{{ sku }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
import helpers from "~/helpers";
export default {
  props: {
    productName: {
      type: String,
      default: "Whitehaven Beach",
    },
    priceAmount: {
      type: String,
      default: "0.00",
    },
    sku: {
      type: String,
      default: "LC 1230",
    },
  },
  methods: {
    formatAmount(amount) {
      return helpers.formatAmount(amount);
    },
  },
};
</script>

<style scope>
.card-bottom {
  position: absolute;
  bottom: 10px;
}
.content-title {
    overflow: hidden;
    width:100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>