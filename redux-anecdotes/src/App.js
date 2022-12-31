import React from "react";
import { useDispatch } from "react-redux";
import { AnecdoteForm, AnecdoteList, Filter, Notification } from "./components";
import { setAnecdotes } from "./reducers/anecdoteReducer";
import { anecdoteService } from "./services";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        anecdoteService.getAll().then((anecdotes) => {
            dispatch(setAnecdotes(anecdotes));
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    );
};

export default App;
