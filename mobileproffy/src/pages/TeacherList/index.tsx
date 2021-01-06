import React, { useCallback, useState } from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import filterIcon from '../../assets/images/icons/filter.png'

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

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

const TeacherList: React.FC = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);

  const handleToggleFilter = useCallback(() => {
    setFilterVisibility(!filterVisibility);
  }, [filterVisibility]);

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
            <Input placeholder="Qual a matéria?" />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholder="Qual o dia?" />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input placeholder="Qual o horário?" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader> 
      

      <ScrollView style={{ marginTop: -60 }} contentContainerStyle={{ padding: 20 }}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </Container>
  );
}

export default TeacherList;