import styled from 'styled-components/native';

interface HeaderProps{
    withIconLeft?: boolean;
}

export const Container = styled.View<HeaderProps>`
    padding-top: 10px;
    flex-direction: row;
    ${props => props.withIconLeft ? `justify-content: flex-start` : `justify-content: space-between`};
    align-items: center;
    background-color: #fff;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 22px;
    font-weight: bold;
`;

export const Icons = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    width: 200px;
    padding: 3px;
    border-bottom-width: 0.2px;
    border-radius: 8px;
`;
