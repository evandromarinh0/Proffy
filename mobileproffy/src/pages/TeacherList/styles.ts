import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const FilterButton = styled(BorderlessButton)``;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins-Regular';
`;

export const Input = styled.TextInput`
  height: 54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin: 4px 0 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background: #04d361;
  height: 58px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo-Bold';
  font-size: 16px;
`;