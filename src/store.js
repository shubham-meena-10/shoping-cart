import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from './services/slices/cartSlice';
import { productsApi } from './services/Apis/productsApi';




const combinereducer = combineReducers({
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})

const store = configureStore({
    reducer: combinereducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getTotals());

export default store;