import './MainPage.scss';
import { useNavigate } from 'react-router-dom';

export function MainPage() {
  const navigate = useNavigate();

  function goFormOne() {
    navigate('/formone');
  }

  function goFormTwo() {
    navigate('/formtwo');
  }

  return (
    <div className='main container'>
      <h1 className='main__title'>main page</h1>
      <button onClick={goFormOne} className='main__button'>form one</button>
      <button onClick={goFormTwo} className='main__button'>form two</button>
    </div>
  );
}
