import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Icons, Title, TextInput } from './styles';import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = (props) => {

  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState();

  const { navigate, goBack } = useNavigation();
  return (
    <Container withIconLeft={props.withIconLeft} >
        {props.withIconLeft ? (
          <TouchableOpacity style={{
            width: 42,
            height: 42,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => goBack()}
          >
            <Icon name={"arrow-left"} color={"#000"} size={20} />
          </TouchableOpacity>

        ) : <></> }

      <Title>Olá, Gabriel</Title>

      {props.withIconsRight ? (
        <Icons>

          {showInput ? (
            <TextInput
              autoFocus={true}
              value={value}
              onChangeText={(val) => setValue(val)}
            />
          ) : (
            <>

              <TouchableOpacity style={{
                width: 42,
                height: 42,
                justifyContent: 'center',
                alignItems: 'center',
              }}
                onPress={() => navigate("Favorites")}
              >
                <Icon name={"heart"} color={"#000"} size={30} />
              </TouchableOpacity>
            </>
          )}

              <TouchableOpacity style={{
                width: 42,
                height: 42,
                justifyContent: 'center',
                alignItems: 'center',
              }}
                onPress={() => { if(showInput){setShowInput(false)}else{setShowInput(true)}}}
              >
                <Icon name={"search"} color={"#000"} size={30} />
              </TouchableOpacity>
        </Icons>
      ) : <></>}



    </Container>
  );
};

export default Header;
