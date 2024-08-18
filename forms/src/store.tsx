import { configureStore, createSlice } from '@reduxjs/toolkit';
import { StoreState } from './interfaces/interfaces';

const initialState: StoreState = {
  formData: [],
  countries: ['Russia', 'Belarus', 'Poland'],
  form: {
    name: '',
    age: null,
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male',
    country: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData.push(action.payload);
    },
    resetFormData(state) {
      state.formData = [];
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export default store;
