import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('ServerError!')
            }
            const data = await response.json();
            return data
        } catch (error) {
            return rejectWithValue((error.message))
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.users = action.payload
        },
        [fetchUsers.rejected]: setError,

    },
})

export default usersSlice.reducer;