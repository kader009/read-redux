import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextUIProvider } from '@nextui-org/react';
import ContextApi from './context/ContextApi';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <ContextApi>
          <Provider store={store}>
            <App />
          </Provider>
        </ContextApi>
      </QueryClientProvider>
    </NextUIProvider>
  </StrictMode>
);
