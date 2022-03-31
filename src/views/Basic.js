import ArrayVisualizer from '../components/ArrayVisualizer/';
import { permutations } from '../utils/arrays';

function BasicView() {
    const n = 200;
    const nums = [...Array(n + 1).keys()].slice(1);
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const nested = ['a', 'b', 'c', ['a', 'b', 'c'], 'd', ['a', 'b', 'c'], ['a', ['a', 'b', 'c'], 'c']];
    const small = ['a', 'b', 'c', 1, 2];

    return (
        <div className="App">
            <ArrayVisualizer array={small} />
            <hr />
            <ArrayVisualizer array={permutations(small)} />
        </div>
    );
}

export default BasicView;
