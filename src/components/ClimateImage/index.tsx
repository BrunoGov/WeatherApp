import React from 'react';

import { Image, ContentImage } from './styles';

interface ClimateImageProps{
    type?: number;
}

/**
 *  Componente contendo as imagens para cada alteração do clima
 * - type: define o tipo de clima atual
 */

export function ClimateImage({ type }: ClimateImageProps) {
    function setPeriodClimateClear(){
        const now = new Date();
        if (now.getHours() >= 0 && now.getHours() < 5){
            return (<Image source={require('../../../assets/climate/lua.png')} />)
        } else if (now.getHours() >= 5 && now.getHours() < 12){
            return (<Image source={require('../../../assets/climate/sol.png')} />)
        } else if (now.getHours() >= 12 && now.getHours() < 18) {
            return (<Image source={require('../../../assets/climate/sol.png')} />)
        } else {
            return (<Image source={require('../../../assets/climate/lua.png')} />);
        };
    }

    function setPeriodClimateClouds(){
        const now = new Date();
        if (now.getHours() >= 0 && now.getHours() < 5){
            return (<Image source={require('../../../assets/climate/nubladoNight.png')} />)
        } else if (now.getHours() >= 5 && now.getHours() < 12){
            return (<Image source={require('../../../assets/climate/nublado.png')} />)
        } else if (now.getHours() >= 12 && now.getHours() < 18) {
            return (<Image source={require('../../../assets/climate/nublado.png')} />)
        } else {
            return (<Image source={require('../../../assets/climate/nubladoNight.png')} />);
        };
    }

    return (
        <ContentImage>
            {type === 1 && (
                <Image source={require('../../../assets/climate/trovoada.png')} />
            )}
            {type === 2 && (
                <Image source={require('../../../assets/climate/chuvisco.png')} />
            )}
            {type === 3 && (
                <Image source={require('../../../assets/climate/chuva.png')} />  
            )}
            {type === 4 && (
                <Image source={require('../../../assets/climate/neve.png')} />  
            )}
            {type === 5 && (
                <Image source={require('../../../assets/climate/nevoa.png')} />
            )}
            {type === 6 && setPeriodClimateClear()}
            {type === 7 && setPeriodClimateClouds()}
        </ContentImage>
    );
};
