import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onClick }) {
    const [name, setName] = useState('');

 const onChange = evt => {
    setName(evt.target.value)
    }

   const onSuubmit = evt => {
       evt.preventDefault();
       onClick({name})
      
  }
    return (
    <header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={onSuubmit}>
    <button type="submit" className={css.searchFormButton}>
      <span className={css.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.searchFormInput}
      name="name"
        value={name}
        onChange={onChange}
      type="text"
      autoComplete='off'
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)
}

Searchbar.propTypes = {
    onClick: PropTypes.func.isRequired
};

