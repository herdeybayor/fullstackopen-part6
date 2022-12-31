import { AnecdoteForm, AnecdoteList } from "./components";

const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForm />
            <AnecdoteList />
        </div>
    );
};

export default App;
