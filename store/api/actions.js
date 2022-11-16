export const fetchDataApi = async function ({ commit, dispatch }) {
  commit("setIsLoading", true);
  try {
    const res = await this.$axios.$get("http://167.172.67.71/api/");
    commit("setDataApi", res.data);
    dispatch("filterData");
    commit("setIsLoading", false);
  } catch (err) {
    console.error(err);
    commit("setIsLoading", false);
  }
};

export const filterData = async ({ state, commit }) => {
  commit("setIsLoading", true);
  const { brands, minPrice, maxPrice } = state.dataFilter;
  const { dataApi } = state;
  if (brands.length > 0 || minPrice !== "" || maxPrice !== "") {
    let filterData = [];
    await new Promise((resolve) =>
      setTimeout(() => {
        filterData = dataApi.filter(
          (item) =>
            brands.includes(item.brand_name) ||
            (parseFloat(item.price_pre_tax) > parseFloat(minPrice) &&
              parseFloat(item.price_pre_tax) < parseFloat(maxPrice))
        );
        resolve();
      }, 1500)
    );
    commit("setIsLoading", false);
    commit("setTableFilter", filterData);
    return;
  }
  commit("setIsLoading", false);
  commit("setTableFilter", dataApi);
};
