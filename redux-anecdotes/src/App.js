import React from "react";
import { useDispatch } from "react-redux";
import { AnecdoteForm, AnecdoteList, Filter, Notification } from "./components";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(initializeAnecdotes());
    }, [dispatch]);
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
