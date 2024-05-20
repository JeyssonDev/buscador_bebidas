import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import { FavoritesPages } from './pages/FavoritesPages';
import { Layout } from './layouts/Layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
