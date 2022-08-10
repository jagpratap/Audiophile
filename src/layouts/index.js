import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// LAYOUT WRAPPER
import ProtectedLayout from "./protected";
import AuthLayout from "./auth";

const Layouts = {
  protected: ProtectedLayout,
  auth: AuthLayout,
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // RETURN LAYOUT BASED ON THE URL
  const getLayout = () => {
    if (/^\/auth(?=\/|$)/i.test(pathname)) return "auth";
    return "protected";
  };

  const Wrapper = Layouts[getLayout()];

  return (
    <>
      <Helmet titleTemplate="InvestLane | %s" />
      <Wrapper pathname={pathname}>
        {children}
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;