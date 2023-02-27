import css from "./styles.module.css";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";

export const App = () => {
    return (
      <div className={css.App}>
        <Searchbar onSubmit="" />  
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
};