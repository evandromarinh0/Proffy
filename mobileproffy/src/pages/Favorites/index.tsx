import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView style={{ marginTop: -60 }} contentContainerStyle={{ padding: 20 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </Container>
  );
}

export default Favorites;