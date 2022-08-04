import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUserTodos = createAsyncThunk(
    'userTodos/fetchUserTodos',
    async function (id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
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

const userTodosSlice = createSlice({
    name: 'userTodos',
    initialState: {
        userTodos: [],
        status: null,
        error: null,
    },
    reducers: {
        addUserTodo(state, action) {
            state.todos.push({
                userId: 1,
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
            });
        },
        removeUserTodo(state, action) {
            state.userTodos = state.userTodos.filter(todo => todo.id !== action.payload.id)
        },
        toggleUserTodoComplete(state, action) {
            const toggledTodo = state.userTodos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
    },
    extraReducers: {
        [fetchUserTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;

        },
        [fetchUserTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.userTodos = action.payload
        },
        [fetchUserTodos.rejected]: setError,
    },
})

export const {addUserTodo, removeUserTodo, toggleUserTodoComplete} = userTodosSlice.actions;
export default userTodosSlice.reducer;