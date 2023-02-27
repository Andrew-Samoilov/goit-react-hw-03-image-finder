import { Component } from "react";
import css from "./styles.module.css";

import { ImageGalleryItem } from "./ImageGalleryItem";

export default class ImageGallery extends Component  {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.inputSearch!==this.props.inputSearch) {
            console.log('Changed inputSearch ');
        }
    }

    render() {
        return (
            <ul className={css.ImageGallery}>
                Image Gallery
                <ImageGalleryItem />
            </ul>
        );
    }
}
