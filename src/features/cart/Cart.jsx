import { BiTrash } from "react-icons/bi";
import Table from "../../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import Heading from "../../components/Heading";
import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

export default function Cart() {
    const dispatch = useDispatch()
    const tableHeaders = ['ID', 'Name', 'Quantity', 'Price', 'Action']
    const totalCartAmount = useSelector(state => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0))
    const totalCartQuantity = useSelector(state => state.cart.cart.length)

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <Container>

            <div className="md:container mx-auto py-12">
                <Heading>My Cart</Heading>
                {totalCartQuantity > 0
                    ? <Table tableHeaders={tableHeaders} type={'cart'} />
                    : <span className="flex space-x-3 justify-center">
                        <p>Empty Cart,</p>
                        <NavLink className='text-lime-300 hover:text-lime-400' to='/shop'>Start Shopping</NavLink>
                    </span>
                }
                {/* Cart Summary */}
                {totalCartQuantity > 0 &&
                    <div className="w-[90%] mx-auto text-xs bg-gray-50 flex items-center justify-between py-3 px-2">
                        <div>Total Quantity: {totalCartQuantity}</div>
                        <div className="text-lime-500">Total Amount: ${totalCartAmount.toFixed(2)}</div>
                    </div>
                }
                {/* Empty Cart */}
                {totalCartQuantity > 0 &&
                    <div
                        onClick={handleClearCart}
                        className="w-[90%] mx-auto flex space-x-1 justify-end items-center my-6 px-2 cursor-pointer text-red-400">
                        <BiTrash className="text-lg" />
                        <span className="text-sm">Empty Cart</span>
                    </div>
                }
            </div >
        </Container>
    )
}
