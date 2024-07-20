import './ErrorButton.scss';
import { useState } from 'react';

export function ErrorButton() {
  const [hasError, setHasError] = useState<boolean>(false);

  function handleClick() {
    setHasError(true);
  }

  if (hasError) {
    throw new Error();
  }

  return (
    <div className="container">
      <button className="error__button" onClick={handleClick}>
        throw error
      </button>
    </div>
  );
}
