import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../Pages/HomePage/HomePage';
import CatalogPage from 'Pages/CatalogPage/CatalogPage';
import FavoritesPage from 'Pages/FavoritesPage/FavoritesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
