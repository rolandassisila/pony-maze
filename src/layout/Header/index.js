import PropTypes from "prop-types";
import { Container, Title } from "./styles";
import React from "react";

function Header(props) {
  const { title, description } = props;
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
