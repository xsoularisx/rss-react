import './Loader.scss';

export function Loader() {
  return (
    <div className="loading">
      <h2 className="loading__txt">loading</h2>
      <div className="loading__animation"></div>
    </div>
  );
}
