import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Circles } from 'react-loader-spinner';
import Button from './Button/Button'
import Modal from './Modal/Modal'


export const App = () => {
  const [imgName, setImgName] = useState('');
  const [dataImgs, setDataImgs] = useState([]);
  const [setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  

  useEffect(() => { 
   if (imgName === '') {
      return;
   }
      setStatus('panding')
      const key = '27593134-a882df11ea431345edf986e72';
      fetch(`https://pixabay.com/api/?q=${imgName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`)
        .then(data => {
          if (data.ok) {
            return data.json()
          }
          return Promise.reject(new Error(`Нет такого имени ${imgName}`))
        })
        .then(data => {
          setDataImgs(prevState => [...prevState,...data.hits]);
           setStatus('resolved')
        
        })
        .catch(error => setError({ error }), setStatus('rejected'))
  },[imgName, page, per_page, setError] )

  const takeNameImg = (nameImg) => {
   console.log(imgName)
    setImgName( nameImg.name );
    setPage(1);
    setDataImgs([]); 
  }

  const showModalToggle = (item) => { 
    setShowModal(!showModal)
    setLargeImageUrl(item)
    }
  
  const loadMore  = () => {
    setPage(prevState => ( prevState + 1))
  }

  return (
    <>
    <Searchbar onClick={takeNameImg} />
    {status === 'resolved' && (
          <ImageGallery imgsName={dataImgs} onClickImg={showModalToggle} />
      )}
      {status === 'panding' && <Circles color="#00BFFF" height={80} width={80} />}
       {showModal && <Modal largeImage={largeImageUrl.largeImageURL} alt={largeImageUrl.tags} closeModal={showModalToggle} />}
         {status === 'resolved' && dataImgs.length > 0 && (<Button loadMore={loadMore} />)}
  </>)
};
