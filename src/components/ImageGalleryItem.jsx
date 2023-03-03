import css from "./styles.module.css";

export const ImageGalleryItem = ({ images, onClick }) => {
    // console.log(images);
    if (images.length!==0) {
        return (images.map((el) => {
            return (
                <li key={el.id}
                    onClick={onClick(el.id)}
                    className={css.ImageGalleryItem}>
                        <img src={el.webformatURL} alt={el.tags} className={css.ImageGalleryItemImage} />
                </li>
            );
        })
        );
    }

}
