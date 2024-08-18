export interface FormFields {
  name: string;
  age: number | null;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  terms?: boolean;
  country: string;
  countries?: string[];
}

export interface RootState {
  form: {
    formData: {
      name: string;
      age: number;
      email: string;
      password: string;
      gender: string;
      country: string;
    }[];
  };
}

export interface StoreState {
  form: FormFields;
  formData: FormFields[];
  countries: string[];
}
