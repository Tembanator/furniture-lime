import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: []
}

const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addWishListItem(state, action) {
            // Payload = newItem
            state.wishList.push(action.payload)
        },
        deleteWishListItem(state, action) {
            state.wishList = state.wishList.filter(item => item.id !== action.payload)
        },
        clearWishList(state) {
            state.wishList = []
        },
    }
})

export const {
    addWishListItem,
    deleteWishListItem,
    clearWishList
} = wishListSlice.actions

export const getIfInWishlist = id => state => state.wishList.wishList.filter(item => item.id === id).length > 0

export default wishListSlice.reducer