import './App.css';
import './components/Array/ArrayContainer';
import ArrayContainer from './components/Array/ArrayContainer';

function App() {
    const n = 50;
    const arr = [...Array(n + 1).keys()].slice(1);

    return (
        <div className="App">
            <ArrayContainer array={arr} />
        </div>
    );
}

export default App;
