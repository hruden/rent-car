import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyles';
import Layout from '../Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('Pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('Pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage/>} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to={"/"}/>} />
        </Route>
      </Routes>
    </>
  );
};
