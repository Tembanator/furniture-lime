import { useSelector } from 'react-redux'
import { getImageURL } from '../utils/getImageUrl'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { div } from 'framer-motion/client';
import PrimaryButton from './PrimaryButton';

export default function SliderComponent() {
    const products = useSelector(state => state.products.sliderProducts)

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 5000,
    };


    return (
        <div className='w-full overflow-hidden'>
            <Slider {...settings}>
                {products.map(product =>
                    <div key={product.id} className='flex items-center aspect-video relative h-[80dvh]'>
                        <img className="object-cover w-full h-full"
                            src={getImageURL(product.image)} alt={product.name} />
                        <div className='bg-gray-800 absolute left-0 top-0 bg-opacity-45 w-full h-full flex flex-col items-center justify-center space-y-4'>
                            <h3 className='font-bold text-2xl text-gray-200'>{product.title}</h3>
                            <h2 className='text-gray-200 font-light'>{product.subtitle}</h2>
                            <div className='w-32'>
                                <PrimaryButton>{product.buttonText}</PrimaryButton>
                            </div>
                        </div>
                    </div>
                )}
            </Slider >
        </div>
    )
}
