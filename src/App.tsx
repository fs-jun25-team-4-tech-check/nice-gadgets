import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';

function App() {
  return (
    <Router basename="/nice-gadgets">
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
