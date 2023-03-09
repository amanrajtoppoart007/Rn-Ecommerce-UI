import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

import localeReducer from './reducers/locale.slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['locale'],
};

const rootReducer = combineReducers({
  locale: localeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
