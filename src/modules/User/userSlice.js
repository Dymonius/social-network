import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchUser.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.user = action.payload
        },
        [fetchUser.rejected]: setError,

    },
})

export default userSlice.reducer;