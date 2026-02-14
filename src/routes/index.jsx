import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { routes, paths } from './data';
import Headers from '../components/headers/Headers';
import Footer from '../components/footers/Footer';

const Router = () => {
  const location = useLocation();

  const publicRoutes = () =>
    routes
      .filter((route) => route.isPublic && route.element)
      .map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ));

  return (
    <Routes>
      <Route element={
        <>
          {location.pathname !== paths.notFound && <Headers />}
          <Outlet />
          {location.pathname !== paths.notFound && <Footer />}
        </>}>{publicRoutes()}</Route>
      <Route path="*" element={<Navigate to={paths.notFound} replace />} />
    </Routes>
  );
};

export default Router;
