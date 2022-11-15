export const fetchDataApi = async function ({ commit }) {
  try {
    const res = await this.$axios.$get("http://167.172.67.71/api/");
    commit("setDataApi", res.data);
  } catch (err) {
    console.error(err);
  }
};
