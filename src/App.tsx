import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import { HomePage } from './pages';
import RightsPage from './pages/RightsPage/RightsPage';
import { MainLayout } from './components/templates';
import ContactsPage from './pages/ContactsPage/ContactsPage';

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
          <Route path="favourites" />
          <Route path="cart" />
          <Route
            path="contacts"
            element={<ContactsPage />}
          />
          <Route
            path="rights"
            element={<RightsPage />}
          />

          <Route path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
