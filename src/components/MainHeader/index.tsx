import React, { useMemo } from 'react';

import {
  Container,
  Profile,
  Welcome,
  UserName,
} from "./styles";

import emojis from '../../utils/emojis';

const MainHeader: React.FC = () => {

  const userEmoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <>
      <Container>
        <h1>Toogle</h1>
        <Profile>
          <Welcome>
            Olá, {userEmoji}
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
