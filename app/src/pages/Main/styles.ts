import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
   /* justify-content: center; */
  flex-direction: column;
  /* background-color: white; */
`;

// export const Logo = styled.Image`
//   margin-top: 32px;
// `;

export const Form = styled.View`
  width: 100%;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FormGroupName = styled.View`
  flex-direction: column;
  padding: 8px;
  width: 72%;


`
export const FormGroupAno = styled.View`
  flex-direction: column;
  padding: 8px;
  width: 26%;



`
export const FormGrupType = styled.View`
  flex-direction: column;
  padding: 8px;
  width: 64%;


`
export const FormGrupButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 24%;

  margin-top: 8px;

  border-radius:8px;

  border: .25px solid #3E1D6B ;

`

export const Label = styled.Text`
  font-size:16px;
  padding: 8px;
  color: whitesmoke;
`
export const Input = styled.TextInput`
  font-size:16px;
  background-color: white;
  width:100%;
  padding-left: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`


