import React, { useState, useEffect } from 'react';

import { FlatList, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';

import BookLucro from '../../assets/book_lucro.png';
import TheWitcher from '../../assets/theWitcher.png';

import {
  Container,
  Books,
} from './styles';
import Book from '../../components/Book';
import { BooksList } from './data';
import { BuscaBooks } from './../../services/livro';
import { BooksListDTO } from './types';

const ListBooks: React.FC = () => {

  const [listBooks, setListBooks] = useState<BooksListDTO[]>([]);

  /* const addBook = (title: string, subTitle: string) => {
    setListBooks([{
      title: "The Witcher",
      subTitle: "Wiffe White"
    }, ...listBooks])
  }

  addBook("The Witcher", "Wiffe White"); */
  console.log(listBooks)

  useEffect(() => {
    const carregaLivros = async() => {
      const response = await BuscaBooks();
      //console.log(json);
      const json = await response.json();
      setListBooks(json);
      if(json != undefined){
      }
    }

    carregaLivros();
    console.log(listBooks);
  }, [])

  return (
    <>
      <Container>
        <Books>
        <Header withIconsRight>
          { (props: { children: any; }) => props.children}
        </Header>
        
        </Books>
          <FlatList
            numColumns={2}
            data={listBooks}
            renderItem={({item}: {item: BooksListDTO}) => <Book data={item} />}
            keyExtractor={(_, index) => {
              return 'item' + index;
            }}
          />
      </Container>
    </>
  );
};

export default ListBooks;
