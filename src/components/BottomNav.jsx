import { FiHeart, FiHome, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import BottomLink from "./BottomLink";

export default function BottomNav() {
    return (
        <div className="shadow flex items-center justify-between px-12 py-4 fixed bottom-0 w-full sm:hidden bg-white">
            <BottomLink icon={<FiHome />} destination='/' />
            <BottomLink icon={<FiShoppingBag />} destination='/shop' />
            <BottomLink icon={<FiShoppingCart />} destination='/cart' />
            <BottomLink icon={<FiHeart />} destination='/wishlist' />
        </div>
    )
}
