import {
  Container,
  Profile,
  Welcome,
  UserName,
} from "./styles"

const MainHeader: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Toogle</h1>
        <Profile>
          <Welcome>
            Olá,
            <UserName>
              Romulo
            </UserName>
          </Welcome>
        </Profile>
      </Container>
    </>
  )
}

export default MainHeader;
