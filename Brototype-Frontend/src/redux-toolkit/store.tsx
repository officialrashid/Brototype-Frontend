import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Add this line
import otpReducer from './otpReducer';
import studentReducer from './studentReducer';
import reviewerReducer from './reviewerReducer';
import superleadReducer from './superleadReducer';
import chatOppositPersonDataReducer from './chatOppositPersonDataReducer';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
   otp : otpReducer,
   student:studentReducer,
   reviewer: reviewerReducer,
   superlead: superleadReducer,
   chat : chatOppositPersonDataReducer
  })
);
export type RootState = ReturnType<typeof persistedReducer>;
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };