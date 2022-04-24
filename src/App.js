import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from 'components/Navigation';
import AppRoutes from 'routes';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>Data Visualizer</h1>
                <hr />
                <Navigation />
                <AppRoutes />
            </div>
        </BrowserRouter>
    );
}

export default App;
