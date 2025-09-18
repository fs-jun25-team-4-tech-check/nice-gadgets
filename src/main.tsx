import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ToastProvider from './providers/ToastProvider.tsx';
import ToastRenderer from './components/atoms/ToastRenderer/ToastRenderer.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <App />
        <ToastRenderer />
      </ToastProvider>
    </QueryClientProvider>
  </StrictMode>,
);
