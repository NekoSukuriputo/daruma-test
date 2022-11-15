export const setDataApi = (state, payload) => {
  state.datas = payload;
};
export const setDataFilter = (state, payload) => {
  state.dataFilter = {
    ...state.dataFilter,
    ...payload,
  };
};
