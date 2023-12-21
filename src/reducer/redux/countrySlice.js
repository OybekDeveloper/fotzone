import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  error: null,
  countries: [],
  filterSearch: [],
  searchValue: "",
};

export const countrySlice=createSlice({
    name:'country',
    initialState,
    reducers:{
        getCountry:(state,action)=>{
            state.countries=action.payload
            state.filterSearch=state.countries
        },
        getSearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        filterCountry:(state)=>{
            const filterData = state.countries?.filter((item) =>
              item.country_name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
            );
            state.filterSearch=filterData
        }
    }
})

export const { getCountry, searchCountry, filterCountry,getSearchValue } = countrySlice.actions;
export default countrySlice.reducer