import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/homepage/productSlice";
import cartReducer from "./features/cart/cartSlice";
import wishListReducer from "./features/wishlist/wishlistSlice";
import sidebarReducer from "./features/sidebar/sidebarSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        sidebar: sidebarReducer,
    }
})

export default store