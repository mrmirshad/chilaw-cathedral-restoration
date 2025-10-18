import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'donate'>('home');

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/donate') {
        setCurrentPage('donate');
      } else {
        setCurrentPage('home');
      }
    };

    handleRouteChange();

    const handlePopState = () => {
      handleRouteChange();
    };

    window.addEventListener('popstate', handlePopState);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          handleRouteChange();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {currentPage === 'home' ? <HomePage /> : <DonatePage />}
    </div>
  );
}

export default App;
