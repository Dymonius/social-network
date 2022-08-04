import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async function ({userId, title, body}, {rejectWithValue, dispatch}) {
        try {
            const post = {
                userId,
                title,
                body
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });

            if (!response.ok) {
                throw new Error('Can\'t add post. Server error.');
            }

            const data = await response.json();
            dispatch(addPost(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null,
    },
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        },
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload
        },
        [fetchPosts.rejected]: setError,

    },
})

const {addPost} = postsSlice.actions;
export default postsSlice.reducer;