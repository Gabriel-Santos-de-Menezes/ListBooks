import React from 'react';
import { useNavigation } from '@react-navigation/native';


import BookLucro from '../../assets/book_lucro.png';
import TheWitcher from '../../assets/theWitcher.png';

import { Container, Image, Subtitle, Title, TouchOpacity } from './styles';
import { BookProps } from './types';

const Book: React.FC<BookProps> = (props) => {

  const { navigate } = useNavigation();
  return (
    <Container>
      <TouchOpacity onPress={() => 
        navigate('BookDetails', {
          BookId: props.data.id,
        })
      } >
        <Image source={{uri: props.data.imagem}} />
        <Title>{props.data.nome}</Title>
        <Subtitle>{props.data.autor}</Subtitle>
      </TouchOpacity>
    </Container>
  );
};

export default Book;
