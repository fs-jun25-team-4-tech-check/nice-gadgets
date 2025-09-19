import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';
import { MainLayout } from './components/templates';
import ItemCardPage from './pages/ItemCard/ItemCardPage';

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
          <Route
            path="item/:productId"
            element={<ItemCardPage />}
          />
          <Route path="favourites" />
          <Route path="cart" />
          <Route path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
