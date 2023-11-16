import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// This Hook Use For Sidebar Items
const useSidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
        active: pathname === '/',
      },
      {
        label: 'Exercises',
        href: '/exercises',
        active: pathname === '/exercises',
      },

      {
        label: 'Recommendation',
        href: '/recommendation',
        active: pathname === '/recommendation',
      },
      {
        label: 'Favorite',
        href: '/favorite',
        active: pathname === '/favorite',
      },
      {
        label: 'About',
        href: '/about',
        active: pathname === '/about',
      },
    ],
    [pathname]
  );

  return routes;
};

export default useSidebar;
