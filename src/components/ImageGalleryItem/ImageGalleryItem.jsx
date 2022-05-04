import { ListItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image, onImageClick}) => (

    <ListItem onClick={() => {
        onImageClick(image)
    }}>
        <Image src={image.webformatURL} alt={image.tags} />
    </ListItem>
            
)