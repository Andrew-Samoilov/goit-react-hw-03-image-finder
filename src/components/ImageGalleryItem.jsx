import css from "./styles.module.css";

export const ImageGalleryItem = () =>{
    return (
        <li className={css.ImageGalleryItem}>
            ImageGalleryItem
            <img src="" alt="" className={css.ImageGalleryItemImage} />
        </li>
    );
}