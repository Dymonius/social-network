import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserPosts = createAsyncThunk(
    'userPosts/fetchUserPosts',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
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

const userPostsSlice = createSlice({
    name: 'userPosts',
    initialState: {
        userPosts: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchUserPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchUserPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.userPosts = action.payload
        },
        [fetchUserPosts.rejected]: setError,

    },
})

export default userPostsSlice.reducer;