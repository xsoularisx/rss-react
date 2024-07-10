import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
