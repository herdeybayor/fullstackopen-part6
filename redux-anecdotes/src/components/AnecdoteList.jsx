import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

function AnecdoteList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) =>
        [...state.anecdote]
            .sort((a, b) => b.votes - a.votes)
            .filter((anecdote) =>
                anecdote.content
                    .toLowerCase()
                    .includes(state.filter.toLowerCase())
            )
    );

    const vote = (id) => {
        dispatch(voteAnecdote(id));
        dispatch(
            setNotification(
                `You voted '${anecdotes.find((a) => a.id === id).content}'`
            )
        );
        const timeout = setTimeout(() => {
            dispatch(setNotification(""));
            clearTimeout(timeout);
        }, 5000);
    };
    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AnecdoteList;
