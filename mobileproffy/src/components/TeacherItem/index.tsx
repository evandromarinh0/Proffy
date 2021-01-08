import React, { useCallback, useState } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

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

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  fav: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, fav }) => {

  const [isFavorite, setIsFavorite] = useState(fav);

  const handleLinkingToWhatsapp = useCallback(async () => {
    await api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, [teacher.whatsapp]);

  const handleToggleFavorite = useCallback(async () => {

    const favorites = await AsyncStorage.getItem('favorites');

      let favoritesArray = [];

      if(favorites) {
        favoritesArray = JSON.parse(favorites);
      }

    if(isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });
      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);
      
      setIsFavorite(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorite]);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar}} />
        <Info>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </Info>
      </Profile>

      <Bio>
        {teacher.bio}
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <Value>R$ {teacher.cost}</Value>
        </Price>

        <ButtonsContainer>
          <FavButton isFavorite={isFavorite} onPress={handleToggleFavorite}>
            {isFavorite
              ? <ToUnfav source={unfavIcon} />
              : <ToFav source={heartOutlineIcon} />
            }
          </FavButton>

          <ContactButton onPress={handleLinkingToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default TeacherItem;