import { configureStore, createSlice } from '@reduxjs/toolkit';

interface FormData {
  name: string;
}

const initialState: { formData: FormData[] } = {
  formData: [],
};

const formSlice = createSlice({
  name: 'formone',
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
