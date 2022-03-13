import './App.css';
import ArrayVisualizer from './components/ArrayVisualizer/';
import { permutations } from './utils/arrays';

function App() {
    const n = 200;
    const nums = [...Array(n + 1).keys()].slice(1);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const nested = ['a', 'b', 'c', ['a', 'b', 'c'], 'd', ['a', 'b', 'c'], ['a', ['a', 'b', 'c'], 'c']];

    return (
        <div className="App">
            <ArrayVisualizer array={nested} />
            <hr />
        </div>
    );
}

export default App;
