import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>🦠 COVID19 Worldwide map</p>
        <ul>
          {/* <li>
            <Link to="/">Map</Link>
          </li> */}
          {/* <li>
            <Link to="/page-2/">Page 2</Link>
          </li> */}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
