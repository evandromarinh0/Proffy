import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundImg from '../../assets/images/give-classes-background.png';

import { 
  Container,
  GiveClassesBackground,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation])

  return(
    <Container>
      <GiveClassesBackground resizeMode="contain" source={backgroundImg}>
        <Title>Quer ser um Proffy?</Title>
        <Description>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Description>
      </GiveClassesBackground>

      <OkButton onPress={handleGoBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
}

export default GiveClasses;