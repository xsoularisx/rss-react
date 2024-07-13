import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Page404 } from "./pages/Page404/Page404";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      ),
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ]
)

export default router