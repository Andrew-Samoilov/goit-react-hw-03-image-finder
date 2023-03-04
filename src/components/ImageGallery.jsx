import { Component } from "react";
import css from "./styles.module.css";
import ErrorPage from './ErrorPage'
import { getImage } from "../services/getImage";
import { Loader } from "./Loader";
import { ImageGalleryItem } from "./ImageGalleryItem";

export default class ImageGallery extends Component {
    state = {
        images: null,
        error: '',
        page: 1,
        id: 0,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.inputSearch, this.props.pageLoaded);

        if (prevProps.inputSearch !== this.props.inputSearch) {
            this.setState({ status: 'pending' })
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
            this.setState({ status: 'pending' })
            getImage(this.props.inputSearch, this.props.pageLoaded)
                .then((response) => response.json())
                .then((images) => {
                    // console.log(images);

                    this.setState({
                        images: [...this.state.images, ...images.hits],
                        status: 'resolved',
                    })
                })
                .catch((error) => {
                    console.log('error :>> ', error);
                    this.setState({ error, status: 'rejected'});
                })
        }
    }

    handleClick = (id, largeImageURL, tags) => {
        // console.log(id, largeImageURL, tags);
        this.props.onClick(id, largeImageURL, tags);
    }

    render() {
        const { images, status, error } = this.state;

        if (status === 'pending') return <Loader />

        if (status === 'resolved')
            return this.state.images && (
                <ul className={css.ImageGallery}>
                    <ImageGalleryItem
                        images={images}
                        onClick={this.handleClick} />
                </ul>
            );
        
        if (status === 'rejected') return <ErrorPage error={error} />

    }
}
