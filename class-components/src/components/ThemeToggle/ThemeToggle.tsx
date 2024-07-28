import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import './ThemeToggle.scss';

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container`}>
      <button className="toggle" onClick={toggleTheme}>
        toggle {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
}
