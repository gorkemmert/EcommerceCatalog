import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './store';
import ListingPage from './pages/ListingPage';
import { Routes, Route } from "react-router-dom"

const queryClient = new QueryClient();
function App() {
 
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ListingPage />}></Route>
        </Routes>
      </QueryClientProvider>
    </Provider>
  );
}

export default App
