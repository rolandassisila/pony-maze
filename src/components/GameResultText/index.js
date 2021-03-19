import PropTypes from "prop-types";
import { Container, Title } from "./styles";
import React from "react";

function GameResultText(props) {
  const { title, color } = props;
  return (
    <Container>
      <Title color={color}>{title}</Title>
    </Container>
  );
}

GameResultText.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default GameResultText;
