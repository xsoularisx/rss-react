import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
