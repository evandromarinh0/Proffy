import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { 
  Container,
  LandingImage,
  Title,
  BoldTitle,
  ButtonsContainer,
  StudyButton,
  StudyButtonText,
  GiveClassesButton,
  GiveClassesButtonText,
  Connections
} from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  const handleNavigateToGiveClass = useCallback(() => {
    navigation.navigate('GiveClasses');
  }, [navigation]);

  const handleNavigateToStudy = useCallback(() => {
    navigation.navigate('Study');
  }, [navigation]);

  useEffect(() => {
    api.get('connections').then(response => {

      setTotalConnections(response.data.total);
    })
  }, []);

  return (
    <Container>
      <LandingImage source={landingImg} />

      <Title>Seja bem vindo,</Title>
      <BoldTitle>O que deseja fazer?</BoldTitle>

      <ButtonsContainer>
        <StudyButton onPress={handleNavigateToStudy}>
          <Image source={studyIcon} />
          <StudyButtonText>Estudar</StudyButtonText>
        </StudyButton>

        <GiveClassesButton onPress={handleNavigateToGiveClass}>
          <Image source={giveClassesIcon} />
          <GiveClassesButtonText>Dar aulas</GiveClassesButtonText>
        </GiveClassesButton>
      </ButtonsContainer>

      <Connections>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Connections>
    </Container>
  );
}

export default Landing;