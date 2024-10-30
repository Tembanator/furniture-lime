import TableRow from './TableRow'
import { useSelector } from 'react-redux'

export default function Table({ tableHeaders, type }) {
    let items = []
    let itemsLength = 0

    if (type === 'wish') {
        items = useSelector(state => state.wishList.wishList)
        itemsLength = items.length
    }
    if (type === 'cart') {
        items = useSelector(state => state.cart.cart)
        itemsLength = items.length
    }

    return (
        <table className="w-[90%] mx-auto text-xs">
            <thead className="bg-gray-300 font-bold">
                <tr>
                    {tableHeaders.map((item, index) => <th className="pt-3 pb-3" key={index}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {itemsLength && items.map(item => <TableRow type={type} item={item} key={item.id} />)}

            </tbody>
        </table >
    )
}
