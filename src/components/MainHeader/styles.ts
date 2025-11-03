import styled from "styled-components";

export const Container = styled.section`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.text};
`;