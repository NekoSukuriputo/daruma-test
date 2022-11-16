<template>
  <div>
    <v-skeleton-loader
      class="mx-auto"
      width="180"
      height="240"
      type="image, article"
    ></v-skeleton-loader>
  </div>
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
  width: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>