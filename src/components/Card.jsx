import { FiEye, FiHeart } from "react-icons/fi"
import { getImageURL } from "../utils/getImageUrl"
import NavButton from "./NavButton"
import PrimaryButton from "./PrimaryButton"
import { useDispatch, useSelector } from "react-redux"
import { addItem, getIfInCart } from '../features/cart/cartSlice'
import { addWishListItem, getIfInWishlist } from "../features/wishlist/wishlistSlice"
export default function Card({ product }) {

    const dispatch = useDispatch()

    const { id, name, image, price } = product

    const isInCart = useSelector(getIfInCart(id))
    const isInWishlist = useSelector(getIfInWishlist(id))

    const handleAddToCart = () => {
        const newItem = {
            id,
            name,
            price,
            quantity: 1,
            totalPrice: price,
            image
        }
        dispatch(addItem(newItem))
    }

    const handleAddToWishlist = () => {
        const newItem = {
            id,
            name,
            price,
            image
        }
        dispatch(addWishListItem(newItem))
    }

    return (
        <div className="p-2">
            <div className="relative group overflow-hidden">
                <img
                    className="aspect-video object-cover w-full"
                    src={getImageURL(image)} alt={name} />
                <div className="flex flex-col space-y-2 justify-start w-10 items-center absolute top-0 right-0 py-4 opacity-1 translate-x-10 group-hover:translate-x-0 duration-300">
                    <NavButton isInWishlist={isInWishlist} onClick={handleAddToWishlist} icon={<FiHeart size={15} />} withPill={false} />
                    {/* <NavButton icon={<FiEye size={15} />} withPill={false} /> */}
                </div>

                <div className={`w-[90%] absolute left-0 right-0 bottom-2 mx-auto translate-y-10 group-hover:translate-y-0 duration-300`}>
                    <PrimaryButton isInCart={isInCart} onClick={handleAddToCart}>{isInCart ? 'Already in Cart' : 'Add To Cart'}</PrimaryButton>
                </div>
            </div>
            <div className="flex items-center font-medium text-sm justify-between py-3">
                <p className="">{name}</p>
                <p className="text-lime-400">${price}</p>
            </div>
        </div>
    )
}
