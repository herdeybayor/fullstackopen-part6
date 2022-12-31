import { useSelector, useDispatch } from "react-redux";
import { createAnecdote, voteAnecdote } from "./reducers/anecdoteReducer";

const App = () => {
    const anecdotes = useSelector((state) => state);
    const dispatch = useDispatch();

    const vote = (id) => {
        dispatch(voteAnecdote(id));
    };

    const create = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = "";
        dispatch(createAnecdote(content));
    };

    return (
        <div>
            <h2>Anecdotes</h2>
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
            <h2>create new</h2>
            <form onSubmit={create}>
                <div>
                    <input name="anecdote" />
                </div>
                <button>create</button>
            </form>
        </div>
    );
};

export default App;
