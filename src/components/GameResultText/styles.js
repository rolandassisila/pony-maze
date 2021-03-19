import styled from "styled-components";

const Title = styled.span`
  color: ${(props) => props.color};
  font-size: 32px;
  font-weight: 500;
`;

const Container = styled.div`
  padding: 0 20px;
  border: none;
  text-align: center;
`;

export { Title, Container };
