import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ShoppingCartProvider from "./Component/Context/ShopincartComp";
import LayOut from "./Component/LayOut/LayOut";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Store from "./Component/Store/Store";
import About from "./Page/About/About";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Profile from "./Page/Profile/Profile";
import RegistrationForm from "./Page/Registration/RegistrationForm";
import AddProduct from "./Page/UserPanel/AddProduct";
import UserPanel from "./Page/UserPanel/UserPanel";
import ViewProducts from "./Page/UserPanel/ViewProducts";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index path="/" element={<Home />} />
      <Route index path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/userpanel" element={<UserPanel />} />
      <Route path="/about" element={<About />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/viewproducts" element={<ViewProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/store" element={<Store />} />
    </Route>
  )
);

function App() {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={routes} />
    </ShoppingCartProvider>
  );
}

export default App;
