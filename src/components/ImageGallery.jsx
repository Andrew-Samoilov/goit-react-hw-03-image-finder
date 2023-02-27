import css from "./styles.module.css";

import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = () => {
    return (
            <ul className={css.ImageGallery}>
                Image Gallery
                <ImageGalleryItem />
            </ul>    
    );
}
