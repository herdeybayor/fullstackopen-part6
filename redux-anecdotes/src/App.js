import { AnecdoteForm, AnecdoteList, Notification } from "./components";

const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <AnecdoteForm />
            <AnecdoteList />
        </div>
    );
};

export default App;
