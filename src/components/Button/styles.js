import styled from "styled-components";
import { COLORS } from "../../styles";

const Title = styled.span`
  color: ${COLORS.WHITE};
  font-size: 12px;
  font-weight: 500;
`;

const Container = styled.button`
  padding: 0 20px;
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  border: none;
  width: 200px;
  height: 40px;
  background-color: ${COLORS.PURPLE};
`;
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

export { Title, Container, ContainerWrap };
