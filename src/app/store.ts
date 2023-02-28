import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  AuthReducer  from '../views/auth/authSlice';
import  UsersReducer  from '../views/admin/users/UsersSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UsersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
