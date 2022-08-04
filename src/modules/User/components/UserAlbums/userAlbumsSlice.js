import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserAlbums = createAsyncThunk(
    'userAlbums/fetchUserAlbums',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
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

const userAlbumsSlice = createSlice({
    name: 'userAlbums',
    initialState: {
        userAlbums: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchUserAlbums.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchUserAlbums.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.userAlbums = action.payload
        },
        [fetchUserAlbums.rejected]: setError,

    },
})

export default userAlbumsSlice.reducer;