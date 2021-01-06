import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Favorite {
  fav: boolean;
}

export const Container = styled.View`
  background: #fff;
  border: solid 1px #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #ccc;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo-Bold';
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 13px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px 24px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background: #fafafc;
  padding: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: 'Poppins-Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const Value = styled.Text`
  font-family: 'Archivo-Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavButton = styled(RectButton)<Favorite>`
  background: ${props => props.fav ? '#e33d3d' : '#8257e5' };
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ToFav = styled.Image``;

export const ToUnfav = styled.Image``;

export const ContactButton = styled(RectButton)`
  background: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  margin-left: 16px;
  font-family: 'Archivo-Bold';
`;