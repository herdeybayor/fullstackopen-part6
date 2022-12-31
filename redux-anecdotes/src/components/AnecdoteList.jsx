import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationWithTimeout } from "../reducers/notificationReducer";

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

    const vote = async (anecdote) => {
        dispatch(voteAnecdote(anecdote));
        dispatch(
            setNotificationWithTimeout(`You voted '${anecdote.content}'`, 5)
        );
    };
    return (
        <>
            {anecdotes.map((anecdote) => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AnecdoteList;
