import styled from "styled-components/native";
import Constants from 'expo-constants';

const marginStatusBar = Constants.statusBarHeight + 20;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  margin-top: ${110 - marginStatusBar}px;
`;

export const ContentImage = styled.View`
  align-items: center;
`;