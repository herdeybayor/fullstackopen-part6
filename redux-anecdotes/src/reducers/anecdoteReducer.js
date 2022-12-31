import { createSlice } from "@reduxjs/toolkit";
import { anecdoteService } from "../services";

const anecdoteSlice = createSlice({
    name: "anecdote",
    initialState: [],
    reducers: {
        setAnecdotes(state, action) {
            return action.payload;
        },
        appendAnecdote(state, action) {
            state.push(action.payload);
        },
    },
});

export const { setAnecdotes, appendAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
};

export const createAnecdote = (content) => async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
};

export const voteAnecdote = (anecdote) => async (dispatch, getState) => {
    const updatedAnecdote = await anecdoteService.update(anecdote.id, {
        ...anecdote,
        votes: anecdote.votes + 1,
    });
    dispatch(
        setAnecdotes(
            getState().anecdote.map((a) =>
                a.id === anecdote.id ? updatedAnecdote : a
            )
        )
    );
};

export default anecdoteSlice.reducer;
