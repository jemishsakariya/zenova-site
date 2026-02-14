import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, MutationCache } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';
import './styles/main.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: (error) => {
        if (error.response?.data?.message) {
          toast.error(error.response.data.message);
        }
      },
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    },
  }),
});

const AppContent = () => {
  return (
    <div className="app-container">
      <div className={'main-content'}>
        <Router />
      </div>
    </div>
  );
};

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppContent />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;
