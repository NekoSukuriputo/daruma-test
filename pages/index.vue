<template>
  <div class="d-flex align-start">
    <div>
      <span class="text-h5">Filter</span>
      <FormFilter />
    </div>
    <div class="pa-10">
      <v-data-iterator
        :items="dataTable"
        item-key="id"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        hide-default-footer
        :sort-by="sortBy.toLowerCase()"
        :search="search"
      >
        <template v-slot:header>
          <div class="d-flex justify-space-between mb-6">
            <div>
              <span>
                Menampilkan {{ calPage.start }} - {{ calPage.end }} dari
                {{ totalData }}
              </span>
            </div>
            <div>
              <v-text-field
                v-model="search"
                clearable
                hide-details
                outlined
                prepend-inner-icon="mdi-magnify"
                label="Cari"
                dense
              ></v-text-field>
            </div>
            <div class=" pl-2">
              <v-select
                v-model="sortBy"
                hide-details
                outlined
                :items="keys"
                prepend-inner-icon="mdi-magnify"
                label="Urutkan berdasarkan"
                item-text="label"
                item-value="value"
                dense
              ></v-select>
            </div>
            <div>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    text
                    color="primary text-capitalize"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ itemsPerPage }} Produk
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
            </div>
          </div>
        </template>
        <template v-slot:default="props">
          <v-row v-if="isLoading">
            <v-col
              v-for="index in 4"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <CardSkeleton />
              </div>
            </v-col>
          </v-row>
          <v-row v-else>
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
        <template v-slot:footer>
          <div class="justify-center mt-6">
            <v-pagination
              v-model="page"
              :length="totalPage"
              :total-visible="7"
              @next="nextPage"
              @previous="formerPage"
            ></v-pagination>
          </div>
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
      itemsPerPageArray: [20, 40, 100],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 40,
      sortBy: "sname",
      keys: [
        { label: "Nama Produk", value: "sname" },
        { label: "Harga", value: "price_pre_tax" },
        { label: "Tanggal", value: "created_at" },
      ],
    };
  },
  components: {
    CardComp: () => import("~/components/Card"),
    CardSkeleton: () => import("~/components/CardSkeleton"),
    FormFilter: () => import("~/components/FormFilter"),
  },
  computed: {
    ...mapGetters("api", {
      dataTable: "getDataTable",
      isLoading: "getIsLoading",
    }),
    numberOfPages() {
      return Math.ceil(this.dataTable.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    calPage() {
      const end = this.page * this.itemsPerPage;
      const start = this.page === 1 ? 1 : end - this.itemsPerPage + 1;
      return { start, end };
    },
    totalData() {
      return this.dataTable.length;
    },
    totalPage() {
      return Math.ceil(parseInt(this.totalData, 10) / this.itemsPerPage);
    },
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
      this.page = 1;
    },
  },
};
</script>
