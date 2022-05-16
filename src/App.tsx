import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import CartPage from './Pages/Cart/cartPage';
import Page404 from './Pages/Page404/page404';
import StorePage from './Pages/Store/storePage';
import SuccessPage from './Pages/Success/successPage';

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/store" element={<StorePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default App;
