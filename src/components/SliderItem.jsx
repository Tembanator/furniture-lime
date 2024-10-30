import { getImageURL } from "../utils/getImageUrl"


export default function SliderItem({ image, name }) {

    return (
        <div className={`w-full h-full shrink-0`}>
            <img
                className="aspect-video object-cover w-full h-full"
                src={getImageURL(image)} alt={name} />
        </div >
    )
}
