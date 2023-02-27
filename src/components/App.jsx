import { Component } from "react";
import css from "./styles.module.css";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { Button } from "./Button";

export default class App extends Component {
  state = {
    inputSearch: '',
  }

  formSubmitHandler = data => {
    // console.log(data);
    this.setState(() => ({
      inputSearch: data,
    }));
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <body> */}
        <ImageGallery />
        {/* </body> */}
        <footer>
          {/* <Loader> */}
          <Button />
          {/* <Modal> */}
        </footer>
      </div>
    );
  } 
};