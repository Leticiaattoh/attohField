import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import ShopNowPage from './pages/ShopNowPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

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
    
    {
      path: '/privacy-policy',
      element: <PrivacyPage />
    },
    {
      path: '/terms',
      element: <TermsPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    
  ]);

  return <RouterProvider router={router} />
 
}

export default App;
