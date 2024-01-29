import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  error: null,
  countries: [],
  filterSearch: [],
  searchValue: "",
  defaultScores: [],
};
const leagues = [
  { id: 335 },
  { id: 278 },
  { id: 332 },
  { id: 344 },
  { id: 153 },
  { id: 147 },
  { id: 152 },
  { id: 300 },
  { id: 302 },
  { id: 207 },
  { id: 206 },
  { id: 205 },
  { id: 175 },
  { id: 168 },
  { id: 322 },
  { id: 266 },
  { id: 3 },
  { id: 4 },
];
export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountry: (state, action) => {
      state.countries = action.payload;
      state.filterSearch = state.countries;
    },
    getSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    filterCountry: (state) => {
      const filterData = state.countries?.filter((item) =>
        item.country_name
          .toLowerCase()
          .includes(state.searchValue.toLowerCase())
      );
      state.filterSearch = filterData;
    },
    getDefaultScores: (state, action) => {
   
  const filterData=leagues.filter((item) =>
    item.id===(action.payload.league_id))
      state.defaultScores = filterData;
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
