<template>
  <div class="d-flex align-start">
    <div>
      <span class="text-h5">Filter</span>
      <FormFilter />
    </div>
    <div class="pa-10">
      <v-data-iterator
        :items="dataApi"
        item-key="id"
        items-per-page.sync="40"
        :page.sync="page"
        hide-default-footer
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <CardComp
                  :productName="item.sname"
                  :priceAmount="item.price_pre_tax"
                  :sku="item.mpn"
                />
              </div>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  async asyncData({ store }) {
    await store.dispatch("api/fetchDataApi");
  },
  data() {
    return {
      page: 1,
    };
  },
  components: {
    CardComp: () => import("~/components/Card"),
    FormFilter: () => import("~/components/FormFilter"),
  },
  computed: {
    ...mapGetters("api", {
      dataApi: "getDataApi",
    }),
  },
};
</script>
