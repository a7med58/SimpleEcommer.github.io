import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ShoppingCartProvider from "./Component/Context/ShopincartComp";
import LayOut from "./Component/LayOut/LayOut";
import Store from "./Component/Store/Store";
import About from "./Page/About/About";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import RegistrationForm from "./Page/Registration/RegistrationForm";
import AddPost from "./Page/UserPanel/AddProduct";
import UserPanel from "./Page/UserPanel/UserPanel";
import ViewPost from "./Page/UserPanel/ViewProduct";
import ViewPosts from "./Page/UserPanel/ViewProducts";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/userpanel" element={<UserPanel />} />
      <Route path="/about" element={<About />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/viewposts" element={<ViewPosts />} />
      <Route path="/posts/:id" element={<ViewPost />} />
      <Route path="/posts/:id/edit" element={<ViewPost />} />
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
