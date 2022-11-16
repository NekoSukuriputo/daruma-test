export const setDataApi = (state, payload) => {
  state.dataApi = payload;
};
export const setDataFilter = (state, payload) => {
  state.dataFilter = {
    ...state.dataFilter,
    ...payload,
  };
};
export const setTableFilter = (state, payload) => {
  state.filterTable = payload;
};

export const setIsLoading = (state, payload) => {
  state.isLoading = payload;
};
