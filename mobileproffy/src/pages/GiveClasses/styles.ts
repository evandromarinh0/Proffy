import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 40px;
  background: #8257E5;
`;

export const GiveClassesBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 180px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: 'Poppins-Regular';
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  margin: 40px 0;
  background: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo-Bold';
  font-size: 16px;
`;
