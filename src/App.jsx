import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from './components/LoadingSpinner';

// Loading components with lazy load
const ListingPage = React.lazy(() => import('./pages/ListingPage'));
const CartsPage = React.lazy(() => import('./pages/CartsPage'));

const queryClient = new QueryClient();

function App() {
 
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* Loading Lazy loaded components with Suspense */}
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/carts" element={<CartsPage />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </Provider>
  );
}

export default App
