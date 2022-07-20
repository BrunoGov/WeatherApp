import React from 'react';

import {
    ContentMoreInformation,
    ContentValue,
    ItensMoreInformation,
    SpanMoreInformation,
    TitleMoreInformation,
    ValueMoreInformation
} from './styles';

interface AdditionalInformationProps{
    minTemperature: string;
    maxTemperature: string;
    wind: number;
    humidity: number;
};

/**
 *  Componente contendo as informações climaticas adicionais
 * - minTemperature: temperatura mínima
 * - maxTemperature: temperatura máxima
 * - wind: velocidade do vento
 * - humidity: porcentagem de humidade
 */

export function AdditionalInformation({ minTemperature, maxTemperature, wind, humidity }: AdditionalInformationProps) {
  return (
    <>
        <ContentMoreInformation>
            <ItensMoreInformation>
                <TitleMoreInformation>Mínima</TitleMoreInformation>
                <ContentValue>
                    <ValueMoreInformation>{parseInt(minTemperature)}</ValueMoreInformation>
                    <SpanMoreInformation celsius='celsius'>°C</SpanMoreInformation>
                </ContentValue>
            </ItensMoreInformation>
            <ItensMoreInformation>
                <TitleMoreInformation>Máxima</TitleMoreInformation>
                <ContentValue>
                <ValueMoreInformation>{parseInt(maxTemperature)}</ValueMoreInformation>
                <SpanMoreInformation celsius='celsius'>°C</SpanMoreInformation>
                </ContentValue>
            </ItensMoreInformation>
        </ContentMoreInformation>
        <ContentMoreInformation>
            <ItensMoreInformation>
                <TitleMoreInformation>Vento</TitleMoreInformation>
                <ContentValue>
                <ValueMoreInformation>{(wind).toFixed(1)}</ValueMoreInformation>
                <SpanMoreInformation>km/h</SpanMoreInformation>
                </ContentValue>
            </ItensMoreInformation>
            <ItensMoreInformation>
                <TitleMoreInformation>Umidade</TitleMoreInformation>
                <ContentValue>
                    <ValueMoreInformation>{humidity}</ValueMoreInformation>
                    <SpanMoreInformation>%</SpanMoreInformation>
                </ContentValue>
            </ItensMoreInformation>
        </ContentMoreInformation>
    </>
  );
};
