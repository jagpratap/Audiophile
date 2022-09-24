import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts";

// Pages
import Home from "./pages/home";
import HeadPhones from "./pages/headphones";
import Speakers from "./pages/speakers";
import Earphones from "./pages/earphones";
import Checkout from "./pages/checkout";

// Routes Mapping
const routes = [
  {
    key: "HOME",
    path: "/home",
    exact: true,
    component: Home,
  },
  {
    key: "HEADPHONES",
    path: "/headphones",
    exact: true,
    component: HeadPhones,
  },
  {
    key: "SPEAKERS",
    path: "/speakers",
    exact: true,
    component: Speakers,
  },
  {
    key: "EARPHONES",
    path: "/earphones",
    exact: true,
    component: Earphones,
  },
  {
    key: "CHECKOUT",
    path: "/checkout",
    exact: true,
    component: Checkout,
  },
];

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {routes.map(({
          component: Component,
          ...props
        }) => (
          <Route {...props} element={<Component />} />
        ))}
        <Route path="/" exact element={<Navigate to="/home" />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
