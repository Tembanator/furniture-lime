import { useSelector } from "react-redux"
import DisplayGrid from './DisplayGrid'

export default function ProductSection({ toDisplay }) {

    const products = useSelector(state => state.products.products)
    let displayProducts = []
    let title = ''
    let hasTitle = ''

    if (toDisplay === 'featured') {
        displayProducts = products.filter(product => product.featured === false).slice(0, 6)
        title = 'Discover Our Featured Products'
        hasTitle = true
    }
    if (toDisplay === 'bestSeller') {
        displayProducts = products.filter(product => product.bestSeller === false).slice(0, 6)
        title = 'Discover Our Best Sellers'
        hasTitle = true
    }

    return (
        <div className="flex flex-col space-y-10">
            {hasTitle && <h2 className="text-center font-semibold text-xl">{title}</h2>}
            <DisplayGrid products={displayProducts} />
        </div>
    )
}
