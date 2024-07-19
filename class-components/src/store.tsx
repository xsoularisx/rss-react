import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './pages/MainPage/MainPageSlice';
import { MainPageState } from './interfaces/intrefaces';

const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
  },
});

export type RootState = {
  mainPage: MainPageState;
};

export default store;
