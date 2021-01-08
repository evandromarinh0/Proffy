import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favTeachers = JSON.parse(response);
        
        setFavorites(favTeachers);
      }
    });
  }, [favorites]);

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView style={{ marginTop: -60 }} contentContainerStyle={{ padding: 20 }}>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} fav={true } />
        ))}
      </ScrollView>
    </Container>
  );
}

export default Favorites;