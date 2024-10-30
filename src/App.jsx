import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './features/homepage/Homepage';
import Shop from './features/shop/Shop';
import Wishlist from './features/wishlist/Wishlist';
import Cart from './features/cart/Cart';
import NotFound from "./pages/NotFound";
import AppLayout from "./components/AppLayout";
import { getProducts } from "./products";
export default function App() {
  const products = getProducts();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/shop' element={<Shop products={products} />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
