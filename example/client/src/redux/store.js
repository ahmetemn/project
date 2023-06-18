
import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userRedux.js";
import storage from 'redux-persist/lib/storage'
import branchReducer from './branchRedux.js';
import messageReducer from "./messageRedux.js";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import booleanReducer from "./boolenRedux.js";
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userSlice)



export const store =  configureStore({
    reducer:{
        user:persistedReducer,
        branches: branchReducer,
        message: messageReducer,
        added:booleanReducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})





export let persistor = persistStore(store)
