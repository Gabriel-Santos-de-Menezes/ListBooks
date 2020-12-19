import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, StatusBar, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Book from '../../components/Book';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Container, Details, Description, Content, Button, ButtonText } from './styles';
import { BookDTO, BookProps } from './types';
import { GetBook } from '../../services/livro';

const BookDetails: React.FC<BookProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [livro, setLivro] = useState<BookDTO|null>(null)
  //const [bookId, setBookId] = useState(0);

  const route = useRoute();



  const AddBookFavorite = async (book: number) => {
    console.log("book", book);
    setLoading(true);


    const b = await AsyncStorage.getItem('Books');

    console.log("b> ", b);

    if(b != null){

      let booksAdd = JSON.parse(b);
  
      if (!booksAdd) {
        booksAdd = [];
      }
  
      booksAdd.push(book);
  
      const add = await AsyncStorage.setItem('Books', JSON.stringify(booksAdd));
  
    }else{

      const booksAdd = [];

      booksAdd.push(book);
  
      const add = await AsyncStorage.setItem('Books', JSON.stringify(booksAdd));
    }
    
    
    setLoading(false);
    //await AsyncStorage.clear();
  }

  useEffect(() => {
    
    const detailsBook = async () => {
      const bookId = route.params?.BookId;
      
      const response = await GetBook(bookId);
      
      const json = await response.json();
      setLivro(json);
    }

    detailsBook();
  }, [])

  const { goBack } = useNavigation();
  const { width, height } = Dimensions.get("window");
  const scrollRef = useRef<ScrollView>();

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={"#E7F5F8"} />
        {livro != null ? (
          <>
            <Content>
              <TouchableOpacity onPress={() => { goBack() }} style={{
                width: 42,
                height: 42,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Icon name={"arrow-left"} color={"#000"} size={20} />
              </TouchableOpacity>

              <Book data={livro} />

            </Content>
            <ScrollView>
              <Details>
                <Description>Descrição</Description>
                <Text>
                  {livro.descricao}
                </Text>
              </Details>
            </ScrollView>

            <Button disabled={loading ? true : false}>
              {loading ? (
                <ActivityIndicator size={20} color={'#fff'} />
              ) : (
                  <ButtonText onPress={() => AddBookFavorite(livro.id)}>
                    Adicionar aos favoritos
                  </ButtonText>
                )}
            </Button>
          </>
        ) : <ActivityIndicator size={42} color="#023e8a" />}

    </Container>
  );
};

export default BookDetails;
