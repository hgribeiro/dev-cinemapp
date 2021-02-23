import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IFavorite {
  touched: boolean;
  // name: string;
}


export const Container = styled.View`
  height: 120px;
  width: 100%;

  /* border: 1px solid ; */
  /* border: 0.15px solid gray; */
  /* border-top: 0.2px; */

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0px;
`;

export const Box = styled.View`
  width: 60%;

  flex-direction: row;

  align-items: center;
  justify-content: flex-start;
  /* justify-content: space-between; */




`;
export const Infos = styled.View`
  height: 88px;
  flex-direction: column;
  padding: 8px;

  align-items: center;
  justify-content: space-between;

`;

export const SubInfos = styled.View`
 width: 100%;
 align-items: center;
 flex-direction: row;
 justify-content: space-between;

`;

export const BoxTwo = styled.View`
  width:30%;

  flex-direction: row;

  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;


`;




export const Title = styled.Text`
  font-size: 20px;

  width:100%;
  justify-content: flex-start;
  margin-right:0;
  /* border: 1px; */


`;


export const Year = styled.Text`
 width: 50%;
 font-size: 16px;
 justify-content: flex-start;

`;

export const Type = styled.Text`
 width: 80px;
 font-size: 15px;

  /* border: 0.3px solid black; */
 border-radius: 5px;

`;




export const Poster = styled.Image`
  /* right:0; */
`;

export const FavoriteButton = styled.TouchableOpacity<IFavorite>`
  background: ${(props) => (props.touched ? 'red' : 'transparent')};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const IconFavorite = styled(Ionicons)`
  font-size: 16px;
  color: #fafafa;
`;
