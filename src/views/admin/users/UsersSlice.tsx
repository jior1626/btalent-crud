import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
import { UserDto } from "../../../services/dto/UserDto"

export interface UsersState {
    users: UserDto[]
    isLoading: boolean
    error: string
}

export const initialState: UsersState = {
    isLoading: false,
    error: "",
    users: []
}

const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading: (state: UsersState, {payload}: PayloadAction<boolean> ) => {
            state.isLoading = payload;
        },
        setLoadingError: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = payload;
        },
        setUsersInStage: (state: UsersState, { payload }: PayloadAction<UserDto[]>) => {
            state.users = payload;
            state.isLoading = false;
        },
        saveUserSuccess: (state: UsersState, { payload }: PayloadAction<UserDto>) => {
            let usersArray: UserDto[] = state.users;
            state.users = [...usersArray, payload]
            state.isLoading = false;
        },
        editUserSuccess: (state: UsersState, { payload }: PayloadAction<UserDto>) => {
            const filtered = state.users.filter((item) => item.id !== payload.id);
            state.users =  [ ...filtered, payload ];
            state.isLoading = false;
        },
        deleteUserSuccess: (state: UsersState, { payload }: PayloadAction<number>) => {
            let usersArray: UserDto[] = state.users;
            state.users = usersArray.filter(item => item.id !== payload);
            state.isLoading = false;
        }
    }
})

export const {setLoading, setLoadingError, setUsersInStage, saveUserSuccess, editUserSuccess, deleteUserSuccess} = UsersSlice.actions;

export const usersSelector = (state: RootState) => state.user;

export default UsersSlice.reducer;