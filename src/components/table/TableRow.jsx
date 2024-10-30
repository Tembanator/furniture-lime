import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { changeItemQuantity, deleteItem } from '../../features/cart/cartSlice'
import { useState } from 'react'
import { deleteWishListItem } from '../../features/wishlist/wishlistSlice'

export default function TableRow({ type, item }) {
    const { id, name, quantity, price } = item

    const [newQuantity, setNewQuantity] = useState(quantity)

    const dispatch = useDispatch()

    const handleChange = (data) => {
        setNewQuantity(data)
        dispatch(changeItemQuantity({ id, newQuantity: Number(data) }))
    }

    const handleDelete = () => {
        dispatch(type === 'wish' ? deleteWishListItem(id) : deleteItem(id))
    }


    return (
        <>
            <tr className="text-center h-14">
                <td>{id}</td>
                <td>{name}</td>
                {type === 'cart' && <td>
                    <input
                        className="mt-1 block w-[80px] bg-gray-50 mx-auto px-3 py-1 border-0 rounded-sm text-sm focus:outline-none focus:border-0 focus:ring-0"
                        value={newQuantity}
                        onChange={e => handleChange(e.target.value)}
                        type="number" id="quantity" name="quantity" min="0" />
                </td>}
                <td>${price.toFixed(2)}</td>
                <td><BiTrash className='text-red-300 cursor-pointer text-lg mx-auto' onClick={handleDelete} /></td>
            </tr>
        </>
    )
}




