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
        // console.log(` start CDU inputSearch`, prevProps.inputSearch);
        // console.log(this.props.inputSearch);
        if (
            prevProps.inputSearch !== this.props.inputSearch ||
            prevState.page !== this.state.page
        ) {
            console.log(`Changed inputSearch ${this.props.inputSearch}`);
            getImage(this.props.inputSearch, 1)
                .then((response) => response.json())
                .then((images) => {
                    console.log(images);

                    this.setState({
                        images: [...this.state.images, ...images.hits],
                    })
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    this.setState({ error });
                })
        }
        // console.log(` end CDU`);
    }

    handleLoad = () => {
        this.setState((prev) => ({ page: prev.page + 1 }))
    }

    render() {
        const { images } = this.state;

        return (
            <ul className={css.ImageGallery}>
                <ImageGalleryItem images={images} />
            </ul>
        );

    }
}
