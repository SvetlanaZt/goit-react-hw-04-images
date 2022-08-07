import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'
import PropTypes from 'prop-types';

export default function ImageGallery({ imgsName, onClickImg }) {
    return (
        <>
             <ul className={css.imageGallery} >
                {imgsName.map(item => (<ImageGalleryItem
                    key={item.id}
                    src={item.webformatURL}
                    tags={item.tags}
                    onClick={()=>onClickImg(item)}
                />))}
             </ul>
             </>
    )
}


ImageGallery.propTypes = {
    imgName: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,),
    onClickImg: PropTypes.func.isRequired,
};