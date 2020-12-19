import React, { useEffect, useState } from 'react';

import { FlatList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Book from '../../components/Book';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Books, Container, Title } from './styles';
import { BooksListDTO } from '../ListBooks/types';
import { BuscaBooks } from '#/src/services/livro';

const Favorites: React.FC = () => {

  const [listBooks, setListBooks] = useState<BooksListDTO[]>([]);

  useEffect(() => {
    const getFavorites = async() => {

      const response = await BuscaBooks();
      //console.log(json);
      const json = await response.json();
      setListBooks(json);
      if(json != undefined){
      }
    }

    carregaLivros();
    console.log(listBooks);
    
      const b = await AsyncStorage.getItem('Books');

      const l = await JSON.parse(b);
      setListBooks(l);
    }

    getFavorites();
  }, [])

  return (
    <Container>
      <Header withIconLeft />
      <Title>Seus favoritos</Title>
      <Books>
        <FlatList
          data={listBooks}
          renderItem={item => <Book data={listBooks} />}
          keyExtractor={item => 'item' + item}
          numColumns={2}
        />
      </Books>

    </Container>
  );
};

export default Favorites;
