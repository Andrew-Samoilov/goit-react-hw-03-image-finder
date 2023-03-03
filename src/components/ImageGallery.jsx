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
        // console.log(this.props.inputSearch, this.props.pageLoaded);

        if (prevProps.inputSearch !== this.props.inputSearch) {
            this.setState({ images: [] });
            this.setState({ page: 1 });
        
            // console.log(`Changed inputSearch ${this.props.inputSearch}`);

            getImage(this.props.inputSearch, 1)
                .then((response) => response.json())
                .then((images) => {
                    // console.log(images);

                    this.setState({
                        images: [...this.state.images, ...images.hits],
                    })
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    this.setState({ error });
                })
        }

        if (prevProps.pageLoaded !== this.props.pageLoaded) {
            getImage(this.props.inputSearch, this.props.pageLoaded)
                .then((response) => response.json())
                .then((images) => {
                    // console.log(images);

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

    onTheClick = event => {
        // console.log(event);
        if (event.currentTarget === event.target) {
            this.props.onClick(event);
        }
    };

    render() {
        const { images } = this.state;

        return (
            <ul className={css.ImageGallery}>
                <ImageGalleryItem images={images} onClick={this.onTheClick} />
            </ul>
        );

    }
}
