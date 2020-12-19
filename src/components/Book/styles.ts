import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 0 auto;
`;

export const Image = styled.Image.attrs({
    rizeMode: "cover",
})`
    max-width: 165px;
    height: 256px;

`;
export const TouchOpacity = styled.TouchableOpacity`
    
    
`;
export const Title = styled.Text`
    max-width: 156px;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
    text-align: center;
`;
export const Subtitle = styled.Text`
    font-size: 14px;
    color: gray;
    margin-bottom: 8px;
    margin: 5px auto;
    
`;
