import { ListItem, Image } from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({image, onImageClick}) => (

    <ListItem onClick={() => {
        onImageClick(image)
    }}>
        <Image src={image.webformatURL} alt={image.tags} />
    </ListItem>
            
)

ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
    onImageClick: PropTypes.func.isRequired
}