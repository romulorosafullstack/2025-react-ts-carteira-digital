import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom: 0.1rem solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const Profile = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  line-height: 1.1;
`; 

export const Welcome = styled.p`
  font-size: 2rem;
  font-weight: 700;
`; 

export const UserName = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
`; 