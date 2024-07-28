import { configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './pages/MainPage/MainPageSlice';
import detailedCardReducer from './components/CardDetailed/CardDetailedSlice';
import { MainPageState, Starship } from './interfaces/intrefaces';

const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    detailedCard: detailedCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  starships: Starship[];
  mainPage: MainPageState;
  detailedCard: {
    data: Starship[];
  };
};
export default store;
