import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

function AnecdoteForm() {
    const dispatch = useDispatch();

    const create = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";
        dispatch(createAnecdote(content));
    };
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div>
                    <input name="anecdote" />
                </div>
                <button>create</button>
            </form>
        </div>
    );
}

export default AnecdoteForm;
