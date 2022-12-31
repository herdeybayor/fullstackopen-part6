import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
    name: "anecdote",
    initialState: [],
    reducers: {
        createAnecdote(state, action) {
            state.push(action.payload);
        },
        voteAnecdote(state, action) {
            const id = action.payload;
            const anecdoteToVote = state.find((anecdote) => anecdote.id === id);
            anecdoteToVote.votes += 1;
        },
        setAnecdotes(state, action) {
            return action.payload;
        },
    },
});

export const { createAnecdote, voteAnecdote, setAnecdotes } =
    anecdoteSlice.actions;
export default anecdoteSlice.reducer;
