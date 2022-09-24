import { Helmet } from "react-helmet";

import Footer from "../components/layouts/footer";
import Header from "../components/layouts/header";

const Layout = ({ children }) => (
  <>
    <Helmet titleTemplate="Audiophile | %s" />
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
