import { FiX } from "react-icons/fi";
import { toggleSidebar } from "./sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function Sidebar() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(toggleSidebar())
    }

    let data = []
    let itemsLength = 0

    const list = useSelector(state => state.sidebar.listToShow)

    if (list === 'wish') {
        data = useSelector(state => state.wishList.wishList)
        itemsLength = data.length
    }
    if (list === 'cart') {
        data = useSelector(state => state.cart.cart)
        itemsLength = data.length
    }
    const listName = list === 'cart' ? 'Cart' : 'Wishlist'
    return (
        <div className="flex w-full h-svh z-10 fixed right-0 left-0 top-0">
            <div className="bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 flex-auto"></div>
            <div className="bg-gray-50 min-w-96 overflow-y-scroll">
                <div className="flex justify-between items-center h-20 p-3 shadow-sm">
                    <h2 className="text-xl font-medium">My Wishlist</h2>
                    <FiX onClick={handleClick} className="text-2xl cursor-pointer hover:scale-105" />
                </div>
                {itemsLength > 0 ? <div className="p-2 flex flex-col space-y-3">
                    {data.map(item => <ListItem key={item.id} item={item} list={list} />)}
                </div> : <p className="text-center text-lg font-medium mt-5">{`Your ${listName} is Empty!`}</p>}
            </div>
        </div>
    )
}
