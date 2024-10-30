import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    listToShow: ''
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar(state, action) {

            state.isOpen = !state.isOpen
            state.listToShow = action.payload
        }
    }
})

export const {
    toggleSidebar
} = sidebarSlice.actions

export default sidebarSlice.reducer