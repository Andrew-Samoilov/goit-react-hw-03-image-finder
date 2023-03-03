import { Component } from "react";
import css from "./styles.module.css";
import { getImage } from "../services/getImage";

import { ImageGalleryItem } from "./ImageGalleryItem";

export default class ImageGallery extends Component {
    state = {
        images: [],
        error: '',
        page: 1,
    }

    componentDidUpdate(prevProps, prevState) {

        if (
            prevProps.value !== this.props.value ||
            prevState.page !== this.state.page
        ) {
            console.log(`Changed inputSearch ${this.props.inputSearch}`);
            getImage(this.props.inputSearch, 1)
                .then((response) => response.json())
                .then((images) => {
                    console.log(images);

                    this.setState({
                        images: [...this.state.images, ...images.images],
                    })
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    this.setState({ error });
                })
        }
    }

    handleLoad = () => {
        this.setState((prev) => ({ page: prev.page + 1 }))
    }

    render() {
        const { images } = this.state;

        return (
            <ul className={css.ImageGallery}>
                Image Gallery
                <ImageGalleryItem images={images} />
            </ul>
        );

    }
}
