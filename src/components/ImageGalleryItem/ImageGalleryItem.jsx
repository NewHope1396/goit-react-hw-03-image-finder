import { ListItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image}) => (

    <ListItem>
        <Image src={image.webformatURL} alt={image.tags} />
    </ListItem>
            
)