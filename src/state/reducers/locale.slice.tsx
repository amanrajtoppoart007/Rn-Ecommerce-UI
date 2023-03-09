import {createSlice} from '@reduxjs/toolkit';
import {I18n} from 'i18n-js';
import translations from '../../locale/translations.json';

const initialState = {
  isLocaleModalVisible: false,
  countries: [
    {
      title: 'India',
      value: 'india',
    },
    {
      title: 'France',
      value: 'france',
    },
  ],
  country: 'india',
  languages: [
    {
      title: 'English',
      value: 'en',
    },
    {
      title: 'French',
      value: 'fr',
    },
  ],
  language: 'en',
};

const i18n = new I18n(translations);
i18n.defaultLocale = initialState.language;
export const localeSlice = createSlice({
  name: 'locale',
  initialState: initialState,
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    toggleLocaleModal: (state, action) => {
      state.isLocaleModalVisible = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      i18n.locale = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setCountry, setLanguage, toggleLocaleModal} = localeSlice.actions;
export default localeSlice.reducer;

// Define the function for changing the language
