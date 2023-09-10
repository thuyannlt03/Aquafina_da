import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../redux/reducers/UserReducer';
import { useDispatch } from 'react-redux';
import { bannerReducer } from './reducers/BannerReducer';



export const store = configureStore({
    reducer: {
        user: userReducer,
        banner: bannerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();