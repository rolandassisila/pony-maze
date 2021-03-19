import PropTypes from "prop-types";
import { Container, Title, ContainerWrap } from "./styles";
import React from "react";

function Button(props) {
  const { title, onPress, color, disabled } = props;
  return (
    <ContainerWrap>
      <Container disabled={disabled} onClick={onPress}>
        <Title>{title}</Title>
      </Container>
    </ContainerWrap>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},

  disabled: false,
};

export default Button;
