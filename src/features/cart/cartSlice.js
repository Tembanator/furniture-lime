import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // Payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            item.quantity++
            item.totalPrice = item.quantity * item.price
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            item.quantity--
            item.totalPrice = item.quantity * item.price
        },
        changeItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload.id)
            item.quantity = action.payload.newQuantity
            item.totalPrice = item.quantity * item.price

            if (item.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
            }
        },
        clearCart(state) {
            state.cart = []
        },
    }
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    changeItemQuantity,
    clearCart
} = cartSlice.actions

export const getIfInCart = id => state => state.cart.cart.filter(item => item.id === id).length > 0

export default cartSlice.reducer