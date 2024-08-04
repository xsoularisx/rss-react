import './Page404.scss';
import { useNavigate } from 'react-router-dom';

export function Page404() {
  const navigate = useNavigate();
  function returnMainPage() {
    navigate('/');
  }
  return (
    <div className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__text">page not found</p>
      <button className="page404__button" onClick={returnMainPage}>
        return main page
      </button>
    </div>
  );
}
