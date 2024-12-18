import React from "react";
import ColorSchemeSwitcher from "./ColorSchemeSwitcher";
import { Link } from "gatsby";

const Header = (props: any) => {
  return (
    <header className="container" {...props}>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/about-us">about-us</Link>
          </li> */}
          <li style={{ marginLeft: "auto" }}>
            <ColorSchemeSwitcher className="contrast" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
