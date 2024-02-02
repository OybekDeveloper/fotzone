import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: true,
  error: null,
  countries: [],
  filterSearch: [],
  searchValue: "",
  defaultScores: [],
  defaultCountry: [],
  defCountry: [
    {
      id: 116,
    },
    {
      id: 44,
    },
    {
      id: 6,
    },
    {
      id: 5,
    },
    {
      id: 4,
    },
    {
      id: 3,
    },
  ],
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.countries = action.payload;
      state.filterSearch = state.countries;
      // const filterData = action.payload.filter((item) => state.defCountry.map((num) => num.id === item.country_id))
      const filterData = state.defCountry
        .map((item) =>
          action.payload.filter((num) => +num.country_id === item.id)
        )
        .flat(Infinity);
      state.defaultCountry = filterData;
      state.isLoading = false;
    },
    getSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.isLoading = false;
    },
    filterCountry: (state) => {
      const filterData = state.countries?.filter((item) =>
        item.country_name
          .toLowerCase()
          .includes(state.searchValue.toLowerCase())
      );
      state.filterSearch = filterData;
      state.isLoading = false;
    },
  },
});

export const {
  getCountry,
  searchCountry,
  filterCountry,
  getSearchValue,
  getDefaultScores,
} = countrySlice.actions;
export default countrySlice.reducer;
