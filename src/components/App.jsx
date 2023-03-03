import { Component } from "react";
import css from "./styles.module.css";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";

export default class App extends Component {
  state = {
    inputSearch: '',
    page:1,
  }

  formSubmitHandler = data => {
    console.log(data);
    this.setState(() => ({
      inputSearch: data,
    }));
  }

  handleLoad = () => {
    // console.log(this.state.page)
    this.setState((prev) => ({ page: prev.page + 1 }))
    console.log(this.state.page)
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} page={this.handleLoad} />
        <ImageGallery
          inputSearch={this.state.inputSearch}
          pageLoaded={this.state.page} />
        <footer className={css.footer}>
          {/* <Loader> */}
        <Button onLoadMore={this.handleLoad} />
          {/* <Modal> */}
        </footer>
      </div>
    );
  } 
};
