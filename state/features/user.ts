import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface User {
	displayName: string,
	email: string,
	emailVerified: boolean,
	phoneNumber: string | undefined,
	photoURL: string | undefined,
	uid: string,
}

// Define the initial state using that type
const initialState = null as User | null;

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    createUser: (state, action: PayloadAction<User>) => {
      state = {...action.payload}
			return state
    },
		deleteUser: (state) => {
      state = null;
			return state;
    },
  },
})

export const { createUser, deleteUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;