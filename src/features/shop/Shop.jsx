import { useSelector } from "react-redux";
import DisplayGrid from '../../components/DisplayGrid'
import Filter from "../../components/Filter";
import { useState } from "react";
import Container from "../../components/Container";

export default function Shop() {
    const products = useSelector(state => state.products.products)
    const [sortedProducts, setSortedProducts] = useState(products)

    const handleSort = (value) => {

        if (value === 'low-to-high') {
            const array = products.slice().sort((a, b) => a.price - b.price)
            setSortedProducts([...array])
        }
        if (value === 'high-to-low') {
            const array = products.slice().sort((a, b) => b.price - a.price)
            setSortedProducts([...array])
        }
        if (value === 'a-z') {
            const array = products.slice().sort((a, b) => a.name.localeCompare(b.name))
            setSortedProducts([...array])
        }
        if (value === 'z-a') {
            const array = products.slice().sort((a, b) => b.name.localeCompare(a.name))
            setSortedProducts([...array])
        }
    }
    return (
        <Container>
            <div className="md:container mx-auto py-12 p-4">
                <Filter onSort={handleSort} />
                <DisplayGrid products={sortedProducts} />
            </div>
        </Container>

    )
}
