import styled from 'styled-components/native';
import { GlobalContainer } from '../../theme/globalContainer';

export const Container = styled.View`
    background: #fff;
    height: 100%;
`;

export const Content = styled.View`
    background-color: #E7F5F8;
    justify-content: center;
`;

export const ViewBottom = styled.View`
    background: #fff;
`;


export const Details = styled.View`
    font-size: 16px;
    font-weight: bold;
    margin: 16px 18px;
    flex: 1;
    
`;
export const Description = styled.Text`
    font-weight: bold;
    margin-bottom: 8px;
`;
export const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #023E8A;
    padding: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin: 16px;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;