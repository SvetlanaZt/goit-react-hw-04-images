import css from './Button.module.css'
import PropTypes from 'prop-types';

export default function Button({ loadMore }) {
    return (
        <button type='button' onClick={loadMore} className={css.button}> Load More</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};
