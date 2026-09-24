import { useState, useEffect } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'service'; slug: string };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '');
  if (clean.startsWith('service/')) {
    const slug = clean.replace('service/', '');
    if (slug) return { name: 'service', slug };
  }
  return { name: 'home' };
}

export function useHashRoute(): [Route, (route: Route) => void] {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (newRoute: Route) => {
    if (newRoute.name === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `/service/${newRoute.slug}`;
    }
  };

  return [route, navigate];
}
