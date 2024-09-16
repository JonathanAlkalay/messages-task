import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RootApiSlice from './slices/rtk-query-slices/RootApiSlice';

const rootReducer = combineReducers({[RootApiSlice.reducerPath]: RootApiSlice.reducer})

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () => {

  const middlewares = [RootApiSlice.middleware]

  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares)
  })
}
