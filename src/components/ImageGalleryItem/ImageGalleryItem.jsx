import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ src, tags, onClick}) {
    return (
        <li className={css.imageGalleryItem} onClick={onClick}>
         <img className={css.imageGalleryItemImage}  src={src} alt={tags}/></li>
        )
}

ImageGalleryItem.propTypes = {
        src: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
};

