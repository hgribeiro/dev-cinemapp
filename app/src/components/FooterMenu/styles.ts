import styled from 'styled-components/native';

export const Container = styled.View`
 height: 80px;
 width: 100%;

 padding: 16px;
 position: absolute;
 background: #181818;
 bottom: 0;
 box-shadow: 0px 0px 13px rgba(0,0,0,0.25);

`;

export const Button = styled.TouchableOpacity`
  background: #fcffa4;
  width: 100%;
  height: 45px;
  border-radius: 5px;

  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #181818;
  font-size: 22px;
`
