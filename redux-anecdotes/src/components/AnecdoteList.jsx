import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

function AnecdoteList() {
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state);

    const vote = (id) => {
        dispatch(voteAnecdote(id));
    };
    return (
        <>
            {anecdotes.map(
                (anecdote) => (
                    <div key={anecdote.id}>
                        <div>{anecdote.content}</div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>
                                vote
                            </button>
                        </div>
                    </div>
                ),
                anecdotes.sort((a, b) => b.votes - a.votes)
            )}
        </>
    );
}

export default AnecdoteList;
