
import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "../../services/dto/UserDto";


export interface UserAuthState {
    isAuth: boolean
    user: UserDto
    isLoading: boolean
    error: string
}

export const initialState: UserAuthState = {
    isAuth: false,
    isLoading: false,
    error: "",
    user: {}
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state: UserAuthState, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setAuthSuccess: (state, { payload }: PayloadAction<UserDto>) => {
            state.user = payload;
            state.isAuth = true;
            state.isLoading = false
            localStorage.setItem("auth", "btalentToken");
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.user = {}
            localStorage.clear();
        },
        setAuthFailed: (state, { payload }: PayloadAction<string>) => {
            state.error = payload
            state.isAuth = false
            state.isLoading = false
        }
    }
})

export const { setAuthSuccess, setLogOut, setLoading, setAuthFailed} = AuthSlice.actions

export const authSelector = (state: RootState) => state.auth

export default AuthSlice.reducer;