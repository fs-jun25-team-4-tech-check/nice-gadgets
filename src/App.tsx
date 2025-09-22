import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { MainLayout } from './components/templates';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="catalog/:category"
            element={<CatalogPage />}
          />
          <Route path="item/:productId" />
          <Route path="favourites" />
          <Route path="cart" />
          <Route path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
