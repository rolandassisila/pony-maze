import PropTypes from "prop-types";
import {
  Container,
  IndicationButtonLeft,
  IndicationButtonUp,
  IndicationButtonDown,
  IndicationButtonRight,
  IndicationButtonDontMove,
  ContainerWrap,
} from "./styles";
import React from "react";

function Indicators(props) {
  const { makeMove } = props;
  return (
    <ContainerWrap>
      <Container>
        <IndicationButtonLeft onClick={() => makeMove("west")}>
          Left
        </IndicationButtonLeft>
        <IndicationButtonUp onClick={() => makeMove("north")}>
          Up
        </IndicationButtonUp>
        <IndicationButtonDown onClick={() => makeMove("south")}>
          Down
        </IndicationButtonDown>
        <IndicationButtonRight onClick={() => makeMove("east")}>
          Right
        </IndicationButtonRight>
        <IndicationButtonDontMove onClick={() => makeMove("stay")}>
          Dont Move
        </IndicationButtonDontMove>
      </Container>
    </ContainerWrap>
  );
}

Indicators.propTypes = {
  makeMove: PropTypes.func,
};

export default Indicators;
