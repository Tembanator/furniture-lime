import { TbTrash } from "react-icons/tb";
import { getImageURL } from "../../utils/getImageUrl";
import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice";
import { deleteWishListItem } from "../wishlist/wishlistSlice";

export default function ListItem({ item, list }) {
    const dispatch = useDispatch()
    const handleDelete = () => {

        if (list === 'wish') dispatch(deleteWishListItem(item.id))
        if (list === 'cart') dispatch(deleteItem(item.id))
    }

    return (
        <div className="flex space-x-4 items-center p-3 bg-gray-100 cursor-pointer group">
            <div className="w-24 aspect-video bg-red-300">
                <img
                    className="aspect-video object-cover w-full"
                    src={getImageURL(item.image)} alt={item.name} />
            </div>
            <div className="flex flex-col space-y-3 flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-xs text-lime-400">${item.price}</p>
            </div>
            <TbTrash onClick={handleDelete} className="text-red-500 text-lg opacity-0 group-hover:opacity-100 duration-300 ease-in-out" />
        </div>
    )
}
