import styled from 'styled-components/native';
import Constants from 'expo-constants';

const marginStatusBar = Constants.statusBarHeight + 20;

import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${marginStatusBar}px 20px 0 20px;
`;

export const Hour = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;

export const Weather = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  font-weight: bold;
`;

export const ContentIcon = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: #fff;
`;