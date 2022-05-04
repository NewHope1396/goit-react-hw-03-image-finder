import { Gallary } from 'components/ImageGallery/ImageGallery.styled'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => (
    <Gallary>
        {images.map(image =>
            <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>)}
    </Gallary>
)