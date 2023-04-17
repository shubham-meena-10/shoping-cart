import gif_404 from '../Assests/404_gif.gif';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {RxReload} from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center not-found-container">
      <div>
        <img src={gif_404} height={'100%'} width={'100%'} alt="Page Not Found" />
        <div className='d-flex justify-content-between align-items-center'>
          <button className='not-found-btn' onClick={() => {navigate(-1)}}><MdOutlineArrowBackIosNew className='mx-2' />Back</button>
          <button className='not-found-btn' onClick={() => {window.location.reload()}} ><RxReload className='mx-2'/>Reload</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
