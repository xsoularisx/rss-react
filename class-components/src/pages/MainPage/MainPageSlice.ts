import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  MainPageState,
  Starship,
  FetchStarshipsParams,
  FetchStarshipsResponse,
} from '../../interfaces/intrefaces';

const initialState: MainPageState = {
  starships: [],
  loading: false,
  error: null,
  count: 0,
  currentPage: 1,
};

export const fetchStarships = createAsyncThunk<
  FetchStarshipsResponse,
  FetchStarshipsParams,
  { rejectValue: string }
>('mainPage/fetchStarships', async ({ query, page }) => {
  const response = await fetch(
    `https://swapi.dev/api/starships/?search=${query}&page=${page}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch starships');
  }
  const data = await response.json();
  return data;
});

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStarships.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStarships.fulfilled,
        (
          state,
          action: PayloadAction<{ results: Starship[]; count: number }>,
        ) => {
          state.starships = action.payload.results;
          state.count = action.payload.count;
          state.loading = false;
        },
      )
      .addCase(fetchStarships.rejected, state => {
        state.loading = false;
        state.error = 'Failed to fetch data';
      });
  },
});

export const { setCurrentPage } = mainPageSlice.actions;
export const selectStarships = (state: RootState) => state.mainPage.starships;
export const selectLoading = (state: RootState) => state.mainPage.loading;
export const selectError = (state: RootState) => state.mainPage.error;
export const selectCount = (state: RootState) => state.mainPage.count;
export const selectCurrentPage = (state: RootState) =>
  state.mainPage.currentPage;

export default mainPageSlice.reducer;
