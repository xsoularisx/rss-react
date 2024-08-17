import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
  },
};

const formSlice = createSlice({
  name: 'formone',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    resetFormData(state) {
      state.formData = { name: '' };
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
