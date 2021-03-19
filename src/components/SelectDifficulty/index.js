import PropTypes from "prop-types";
import { Container, Title, Selection } from "./styles";
import React from "react";

function SelectDifficulty(props) {
  const { difficultyTitle, value, color, onChange, children } = props;
  return (
    <Container color={color}>
      <Title>{difficultyTitle}</Title>
      <Selection value={value} onChange={onChange}>
        {children}
      </Selection>
    </Container>
  );
}

SelectDifficulty.propTypes = {
  difficultyTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default SelectDifficulty;
