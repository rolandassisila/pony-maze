import styled from "styled-components";
import { COLORS } from "../../styles";

const Title = styled.span`
  color: ${COLORS.BLACK};
  font-size: 12px;
  font-weight: 500;
`;

const Selection = styled.select`
  margin-left: 20px;
  padding: 5px;
`;
const Container = styled.div`
  padding: 20px 20px;
  border: none;
  width: 100%;
  height: auto;
  width: 100px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export { Title, Container, Selection };
