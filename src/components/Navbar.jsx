import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sidebar/sidebarSlice";

export default function Navbar() {
    const numItemsInCart = useSelector(state => state.cart.cart.length)
    const numItemsInWishList = useSelector(state => state.wishList.wishList.length)
    const dispatch = useDispatch()

    const onShowWishlistSidebar = () => {
        dispatch(toggleSidebar('wish'))
    }
    const onShowCartSidebar = () => {
        dispatch(toggleSidebar('cart'))
    }

    return (
        <div className="shadow-sm">
            <div className="md:container md:mx-auto flex justify-between py-6 px-8">
                <h3 className="font-bold text-2xl" >Furniture</h3>
                <ul className=" hidden sm:flex space-x-3 justify-center items-center ">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/shop'>Shop</NavLink></li>
                    <li><NavLink to='/cart'>Cart</NavLink></li>
                    <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
                </ul>
                <div className="flex space-x-6">
                    <NavButton icon={<FiHeart size={15} />} withPill={true} pillAmount={numItemsInWishList} onClick={onShowWishlistSidebar} />
                    <NavButton icon={<FiShoppingCart size={15} />} withPill={true} pillAmount={numItemsInCart} onClick={onShowCartSidebar} />
                </div>
            </div>
        </div>
    )
}
