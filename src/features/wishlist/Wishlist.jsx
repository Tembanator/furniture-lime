import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Table from "../../components/table/Table"
import Heading from "../../components/Heading"
import { clearWishList } from "./wishlistSlice"
import { BiTrash } from "react-icons/bi"
import Container from "../../components/Container"

export default function Wishlist() {
    const dispatch = useDispatch()
    const tableHeaders = ['ID', 'Name', 'Price', 'Action']

    const totalWishlistQuantity = useSelector(state => state.wishList.wishList.length)

    const handleClearWishList = () => {
        dispatch(clearWishList())
    }

    return (
        <Container>
            <div className="md:container mx-auto py-12">
                <Heading>My Wish List</Heading>
                {totalWishlistQuantity > 0
                    ? <Table tableHeaders={tableHeaders} type={'wish'} />
                    : <span className="flex space-x-3 justify-center">
                        <p>Empty List,</p>
                        <NavLink className='text-lime-300 hover:text-lime-400' to='/shop'>Start Shopping</NavLink>
                    </span>
                }

                {/* Empty Cart */}
                {totalWishlistQuantity > 0 &&
                    <div
                        onClick={handleClearWishList}
                        className="w-[90%] mx-auto flex space-x-1 justify-end items-center my-6 px-2 cursor-pointer text-red-400">
                        <BiTrash className="text-lg" />
                        <span className="text-sm">Empty Wish List</span>
                    </div>
                }
            </div >
        </Container>
    )
}
