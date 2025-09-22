import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';
import { MainLayout } from './components/templates';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import CartPage from './pages/CartPage/CartPage';

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
          <Route path="catalog/:category/:sortBy?/:itemsPerPage?" />
          <Route path="item/:productId" />
          <Route
            path="favourites"
            element={<FavouritesPage />}
          />
          <Route
            path="cart"
            element={<CartPage />}
          />
          <Route path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
