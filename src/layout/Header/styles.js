import styled from "styled-components";
import { COLORS } from "../../styles";

const Title = styled.span`
  color: ${COLORS.WHITE};
  font-size: 22px;
  font-weight: 500;
`;

const Container = styled.div`
  display: column;
  height: 60px;
  padding: 10px 0px;
  background-color: ${COLORS.PURPLE};
  text-align: center;
`;

export { Title, Container };
