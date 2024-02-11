import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  const NavLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/menu",
      title: "Menu",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <div className="header-area">
      <Navbar collapseOnSelect expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <Image className="site-logo" src={logo} alt="Abarian" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {NavLinks.map(({ path, title }) => (
                <NavLink to={path} key={path}>
                  {title}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
