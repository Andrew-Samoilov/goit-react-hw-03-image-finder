import css from "./styles.module.css";

export const ImageGalleryItem = ({ images }) => {
    console.log(images);
    if (images.length !== 0) {
        return (images.hits.map((el) => {
            return (
                <li key={el.id} className={css.ImageGalleryItem}>
                    ImageGalleryItem
                    <img src="{el.previewURL}" alt="" className={css.ImageGalleryItemImage} />
                </li>
            );
        })
        );
    }

}
