import { Gallary } from 'components/ImageGallery/ImageGallery.styled'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => (
    <Gallary>
        {images.map(image =>
            <ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick}></ImageGalleryItem>)}
    </Gallary>
)

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object.isRequired),
    onImageClick: PropTypes.func.isRequired
}
