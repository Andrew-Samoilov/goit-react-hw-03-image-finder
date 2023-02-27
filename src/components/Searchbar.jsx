import css from "./styles.module.css";

export const Searchbar = (onSubmit) => {
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={onSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}
