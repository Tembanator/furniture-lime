import Card from "./Card"

export default function DisplayGrid({ products }) {

    return (
        <div
            className="mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[430px] sm:max-w-full">
            {products.map((product) => <Card product={product} key={product.id} />)}
        </div>
    )
}
