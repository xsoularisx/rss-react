'use client';

import React from 'react';
import './page.css';
import './normalize.css';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { MainPage } from '../pages/MainPage/MainPage';

export default function Home() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <ErrorBoundary>
            <MainPage />
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
