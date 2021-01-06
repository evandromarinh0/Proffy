import React from 'react';
import { Image } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import { 
  Container,
  Profile,
  Avatar,
  Info,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  Value,
  ButtonsContainer,
  FavButton,
  ToFav,
  ToUnfav,
  ContactButton,
  ContactButtonText,
} from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: 'https://github.com/evandromarinh0.png'}} />
        <Info>
          <Name>Evandro Marinho</Name>
          <Subject>Inglês</Subject>
        </Info>
      </Profile>

      <Bio>
        I love good quotes.
        {'\n'}{'\n'}
        Daydreaming about skydiving stuff
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <Value>R$ 25,00</Value>
        </Price>

        <ButtonsContainer>
          <FavButton fav>
            {/* <ToFav source={heartOutlineIcon} /> */}
            <ToUnfav source={unfavIcon} />
          </FavButton>

          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;