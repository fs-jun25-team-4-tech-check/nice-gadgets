import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastProvider from './providers/ToastProvider.tsx';
import ToastRenderer from './components/atoms/ToastRenderer/ToastRenderer.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { MainLayout } from './components/templates';
import { HomePage } from './pages';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import RightsPage from './pages/RightsPage/RightsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import CartPage from './pages/CartPage/CartPage';
import ItemCardPage from './pages/ItemCard/ItemCardPage';

import './styles/main.scss';

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'catalog/:category',
        element: <CatalogPage />,
      },
      {
        path: 'item/:productId',
        element: <ItemCardPage />,
      },
      {
        path: 'favourites',
        element: <FavouritesPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'rights',
        element: <RightsPage />,
      },
      {
        path: '*',
        element: null,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <RouterProvider router={router} />
          <ToastRenderer />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
