import Container from "../../components/Container";
import Midsection from "../../components/Midsection";
import ProductSection from "../../components/ProductSection";
import SliderComponent from "../../components/SliderComponent";
export default function Homepage() {

    return (
        <>
            <SliderComponent />
            <Container>

                <div className="md:container mx-auto py-12 flex flex-col space-y-16">
                    <ProductSection toDisplay={'featured'} />
                    <Midsection />
                    <ProductSection toDisplay={'bestSeller'} />
                </div>
            </Container>
        </>
    )
}
