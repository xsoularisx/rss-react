import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { FormOne } from './pages/Form_1/FormOne';
import { FormTwo } from './pages/Form_2/FormTwo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/formone',
    element: <FormOne />,
  },
  {
    path: '/formtwo',
    element: <FormTwo />,
  },
]);

export default router;
