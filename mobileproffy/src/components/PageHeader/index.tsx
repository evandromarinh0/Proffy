import React, { ReactNode, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { 
  Container,
  TopBar,
  BackButton,
  Content,
  Title
} from './styles';

interface PageHeaderProps {
  title: string;
  headerFilter?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerFilter, children }) => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    navigation.navigate('Landing')
  }, [navigation])

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Content>
        <Title>{title}</Title>
        {headerFilter}
      </Content>

      {children}
    </Container>
  );
}

export default PageHeader;