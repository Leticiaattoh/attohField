import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ShopNow from './components/ShopNow';
import ShopNowPage from './pages/ShopNowPage';
import About from './components/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/shop-now',
      element: <ShopNowPage />
    },
    
  ]);

  return <RouterProvider router={router} />
 
}

export default App;
