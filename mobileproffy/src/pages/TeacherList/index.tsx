import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import filterIcon from '../../assets/images/icons/filter.png'

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';

import { 
  Container,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  FilterButton,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleToggleFilter = useCallback(() => {
    setFilterVisibility(!filterVisibility);
  }, [filterVisibility]);

  const handleFiltersSubmit = useCallback(async() => {
    await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    }).then(response => {
      console.log(response.data);
      setTeachers(response.data);
    });
    setFilterVisibility(false);
  }, [subject, week_day, time]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favTeachers = JSON.parse(response);
        const favTeachersIds = favTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })
        setFavorites(favTeachersIds);
      }
    });
  });

  return (
    <Container>
      <PageHeader 
        title="Proffys disponíveis" 
        headerFilter={(
          <FilterButton onPress={handleToggleFilter}>
            <Image source={filterIcon} />
          </FilterButton>
        )}
      >
        {filterVisibility && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input placeholder="Ex: Ciências" value={subject} onChangeText={text => setSubject(text)} />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Ex: 1 -> Segunda" value={week_day} onChangeText={text => setWeekDay(text)} />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Ex: 13:00" value={time} onChangeText={text => setTime(text)} />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader> 

      <ScrollView style={{ marginTop: -60 }} contentContainerStyle={{ padding: 20 }}>
        {teachers.map(((teacher: Teacher) => (
          <TeacherItem 
            fav={favorites.includes(teacher.id)} 
            key={teacher.id} 
            teacher={teacher}
          />
        )))}
      </ScrollView>
    </Container>
  );
}

export default TeacherList;