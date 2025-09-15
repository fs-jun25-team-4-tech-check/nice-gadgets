import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
