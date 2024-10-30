import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../products";
import { getSliderProducts } from "../../sliderProducts";

const initialState = {
    products: getProducts(),
    sliderProducts: getSliderProducts()
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer