import { Component } from "react";
import css from "./styles.module.css";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Modal from "./Modal";

export default class App extends Component {
  state = {
    inputSearch: '',
    page: 1,
    showModal: false,
    clickId:1,
    imgUrl: '',
    imgTag: '',
  }

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(() => ({
      inputSearch: data,
    }));
  }

  handleLoad = () => {
    // console.log(this.state.page)
    this.setState((prev) => ({ page: prev.page + 1 }))
  }

  toggleModal = clickId => {
    // console.log(` click ${clickId}`);
    // this.setState(({ state }) => ({ clickId}));
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  clickId = clickId => {
    // console.log(clickId);
    // this.setState(({ state }) => ({ clickId }));
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} page={this.handleLoad} />
        <ImageGallery
          inputSearch={this.state.inputSearch}
          pageLoaded={this.state.page}
          currentHit={this.state.currentHit}
          onClick={this.clickId}
        />
        <footer className={css.footer}>
          {/* <Loader> */}
          <Button onLoadMore={this.handleLoad} />
        </footer>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>Image</div>
            <h2>Description:</h2>
            <img src={this.imgUrl} alt={this.imgTag} />
            <button type="button" onClick={this.toggleModal}>Close</button>
          </Modal>
        )}
      </div>
    );
  }
};
