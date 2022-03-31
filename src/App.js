import './App.css';
import ArrayVisualizer from './components/ArrayVisualizer/';
import Queue from './components/QueueStack/Queue';
import Stack from './components/QueueStack/Stack';
import { permutations } from './utils/arrays';

function App() {
    const n = 200;
    const nums = [...Array(n + 1).keys()].slice(1);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const nested = ['a', 'b', 'c', ['a', 'b', 'c'], 'd', ['a', 'b', 'c'], ['a', ['a', 'b', 'c'], 'c']];
    const small = ['a', 'b', 'c', 1, 2];

    return (
        <div className="App">
            <ArrayVisualizer array={small} />
            <hr />
            <Queue maxSize="20" />
            <hr />
            <Stack maxSize="20" />
        </div>
    );
}

export default App;
