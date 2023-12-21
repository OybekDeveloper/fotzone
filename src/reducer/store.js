import { configureStore } from "@reduxjs/toolkit";
import country from './redux/countrySlice'

export const store=configureStore({
    reducer:{country}
})

