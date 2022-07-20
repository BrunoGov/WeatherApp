import styled, { css } from "styled-components/native";

type TEXT_CELSIUS = 'celsius';

interface SpanMoreInformationProps {
  celsius?: TEXT_CELSIUS;
}

export const MaxTemperature = styled.Text`
  color: #000;
  position: absolute;
  top: 35%;
  right: 30px;
  margin-left: 20px;
`;

export const ContentMoreInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ItensMoreInformation = styled.View`
  width: 50%;
`;

export const TitleMoreInformation = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #fff;
`;

export const ValueMoreInformation = styled.Text`
  font-size: 35px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const ContentValue = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const SpanMoreInformation = styled.Text<SpanMoreInformationProps>`
  font-size: 15px;
  color: #fff;
  text-align: center;

  ${(props) =>
    props.celsius &&
    css`
      font-weight: bold;
      margin-top: 5px;
    `}

  ${(props) =>
    !props.celsius &&
    css`
      font-weight: bold;
      margin-top: 18px;
    `}
`;