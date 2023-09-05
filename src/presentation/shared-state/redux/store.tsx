import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../redux/reducers/UserReducer';
import { useDispatch } from 'react-redux';
import { bannerReducer } from './reducers/BannerReducer';
import { quantityGiftReducer } from './reducers/QuantityGift';
import { giftReducer } from './reducers/GiftReducer';


export const store = configureStore({
    reducer: {
        user: userReducer,
        banner: bannerReducer,
        quantityGift: quantityGiftReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();