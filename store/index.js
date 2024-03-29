import Vuex from "vuex";
import api from "./api";


const store = () => {
  return new Vuex.Store({
    modules: {
      api,
    },
  });
};

export default store;
