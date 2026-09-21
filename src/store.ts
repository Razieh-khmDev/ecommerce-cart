import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from  '../src/features/products/productsApi';
import cartReducer from '../src/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
