import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 0.1rem solid ${props => props.theme.colors.white};
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Profile = styled.div`
  align-items: flex-start;
  display: flex;
`; 

export const Welcome = styled.h3`
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`; 

export const UserName = styled.span`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
`; 