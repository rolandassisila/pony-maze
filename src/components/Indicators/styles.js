import styled from "styled-components";
import { COLORS } from "../../styles";

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;

const IndicationButtonLeft = styled.button`
  padding: 0 20px;
  cursor: "pointer";
  border: none;
  width: 80px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  margin: 5px;
`;
const IndicationButtonUp = styled.button`
  padding: 0 20px;
  cursor: "pointer";
  border: none;
  width: 80px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  margin: 5px;
`;
const IndicationButtonDown = styled.button`
  padding: 0 20px;
  cursor: "pointer";
  border: none;
  width: 80px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
  margin: 5px;
`;
const IndicationButtonRight = styled.button`
  padding: 0 20px;
  cursor: "pointer";
  border: none;
  width: 80px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  margin: 5px;
`;
const IndicationButtonDontMove = styled.button`
  padding: 0 20px;
  cursor: "pointer";
  border: none;
  width: 80px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  margin: 5px;
`;

export {
  Container,
  IndicationButtonLeft,
  IndicationButtonUp,
  IndicationButtonDown,
  IndicationButtonRight,
  IndicationButtonDontMove,
  ContainerWrap,
};
