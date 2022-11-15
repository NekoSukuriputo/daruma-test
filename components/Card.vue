<template>
  <v-card class="mx-auto" max-width="150" height="240">
    <v-img src="/base-image.png" aspect-ratio="1.7" contain> </v-img>
    <div class="pa-2">
      <div class="subtitle-2 mb-auto">{{ productName }}</div>
      <div class="card-bottom flex-column align-self-end">
        <div class="title red--text">Rp {{ formatAmount(priceAmount) }}</div>
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
</style>