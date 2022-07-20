import React from 'react';

import {
    Container,
    Hour,
    ContentIcon,
    Icon,
    Weather
} from './styles';

type PERIOD_TYPE = 'day' | 'night';

interface HeaderProps{
    period: PERIOD_TYPE;
    climate: string;
    onPress: () => void;
}

/**
 *  Componente contendo as informações do header
 * - period: periodo do dia
 * - climate: clima atual
 * - onPress: botão com ação para atualizar o clima
 */

export function Header({ period, climate, onPress, ...rest }: HeaderProps) {
  return (
    <Container {...rest}>
        <Hour>{period === 'day' ? 'Dia' : 'Noite'}</Hour>
        <Weather>{climate}</Weather>
        <ContentIcon onPress={onPress}>
            <Icon name='refresh-cw' size={25} />
        </ContentIcon>
    </Container>
  );
};
