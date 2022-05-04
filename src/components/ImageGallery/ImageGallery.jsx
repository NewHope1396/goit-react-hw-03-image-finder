import { Gallary } from 'components/ImageGallery/ImageGallery.styled'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images, onImageClick }) => (
    <Gallary>
        {images.map(image =>
            <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick}></ImageGalleryItem>)}
    </Gallary>
)