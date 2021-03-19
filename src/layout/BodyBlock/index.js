import PropTypes from "prop-types";
import { Container } from "./styles";
import React from "react";

function BodyBlock(props) {
  const { maze } = props;
  return (
    <Container>
      <pre>{maze}</pre>
    </Container>
  );
}

BodyBlock.propTypes = {
  maze: PropTypes.string,
};

export default BodyBlock;
