import { Component } from "react";
import css from "./styles.module.css";

export default class Searchbar extends Component {
    state = {
        inputSearch: '',
    }

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
    }; 

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputSearch);
        this.setState({ inputSearch: '' });
        // console.log(this.state);
    };

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit"
                        className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        name="inputSearch"
                        autoFocus
                        onChange={this.handleChange}
                        value={this.state.number}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
};
