import { Component } from "react";
import css from "./styles.module.css";
import { getImage } from "../services/getImage";

import { ImageGalleryItem } from "./ImageGalleryItem";

export default class ImageGallery extends Component {
    state = {
        images: [],
        error: '',
       
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(` start CDU inputSearch`, prevProps.inputSearch);
        // console.log(this.props.inputSearch);
        if (
            prevProps.inputSearch !== this.props.inputSearch ||
            prevProps.pageLoaded !== this.props.pageLoaded
        ) {
            console.log(`Changed inputSearch ${this.props.inputSearch}`);
            this.setState({images: []});
            getImage(this.props.inputSearch, this.props.pageLoaded)
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
