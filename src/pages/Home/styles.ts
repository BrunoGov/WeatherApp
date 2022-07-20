import styled, { css } from 'styled-components/native';

type TEXT_PERIOD = 'day' | 'night';

interface PeriodProps {
  period?: TEXT_PERIOD;
}

export const Container = styled.ScrollView<PeriodProps>`
  flex: 1;

  ${(props) =>
    props.period === 'day' &&
    css`
      background-color: #4CACFB;
    `}
    
  ${(props) =>
    props.period === 'night' &&
    css`
      background-color: #124E78;
    `}
`;

export const BackgroudSecondary = styled.View<PeriodProps>`
  ${(props) =>
    props.period === 'day' &&
    css`
      background-color: #449AEC;
    `}
    
  ${(props) =>
    props.period === 'night' &&
    css`
      background-color: #1F6293;
    `}
    
  width: 120%;
  height: 100%;
  border-radius: 220px;
  position: absolute;
  bottom: -200px;
  margin-left: -35px;
`;

export const NameCity = styled.Text`
  font-size: 25px;
  color: #fff;
  text-align: center;
`;

export const Degrees = styled.Text`
  font-size: 70px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const ImageLoading = styled.Image`
  align-items: center;
  position: absolute;
  top: 36%;
  left: 100px;
`;