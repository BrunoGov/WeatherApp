import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { API_KEY } from '@env';

import api from '../../services/api';
import { ApiWeatherProps } from '../../utils/interfaces';

import * as Location from 'expo-location';

import { Header } from '../../components/Header';
import { AdditionalInformation } from '../../components/AdditionalInformation';

import { getClimateImage } from '../../utils/climates';

import {
  Container,
  BackgroudSecondary,
  NameCity,
  Degrees,
  ImageLoading
} from './styles';

interface LocationProps{
  latitude: number;
  longitude: number;
}

export function Home() {
  const [city, setCity] = useState<string>('');
  const [temperature, setTemperature] = useState<any>(0);
  const [minTemperature, setMinTemperature] = useState<any>(0);
  const [maxTemperature, setMaxTemperature] = useState<any>(0);
  const [climate, setClimate] = useState<string>('');
  const [typeWeather, setTypeWeather] = useState<string>('');
  const [wind, setWind] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [location, setLocation] = useState<any>([]);

  useEffect(() => {
    getLocation();
  }, []);

  function convertTemperature(kelvin: number){
    return kelvin - 273.15;
  };

  async function getLocation() {
    setClimate('');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      Alert.alert('Localização', 'Precisamos do acesso a sua localização.', [
        {
          text: 'Cancelar',
          onPress: () => {
            Alert.alert('Localização', 'Navegue até as configurações do celular e altere as permissões.');
          },
          style: 'cancel'
        },
        { 
          text: 'OK',
          onPress: () => {
            Alert.alert('Localização', 'Navegue até as configurações do celular e altere as permissões.');
          }
        },
      ]);
    }else{
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      getData(location.coords);
    }
  };

  async function getData(location: LocationProps){
    api.get(`weather?lat=${location.latitude}&lon=${location.longitude}&lang=pt_br&appid=${API_KEY}`)
    .then((response: ApiWeatherProps) => {
      const location = `${response.data.name}, ${response.data.sys.country}`;
      const degrees = convertTemperature(response.data.main.temp);
      const climate = response.data.weather[0].description;
      const climateType = response.data.weather[0].main;
      const minTemp = convertTemperature(response.data.main.temp_min);
      const maxTemp = convertTemperature(response.data.main.temp_max);
      const speedWind = response.data.wind.speed;
      const humidityToday = response.data.main.humidity;

      setCity(location);
      setTemperature(degrees);
      setClimate(climate);
      setTypeWeather(climateType);
      setMinTemperature(minTemp);
      setMaxTemperature(maxTemp);
      setWind(speedWind);
      setHumidity(humidityToday);
    })
    .catch(() => {
      Alert.alert('Ops', 'Houve um erro, tente novamente mais tarde.');
    });
  };

  function setPeriod(){
    const now = new Date();
    if (now.getHours() >= 0 && now.getHours() < 5){
      return 'night';
    } else if (now.getHours() >= 5 && now.getHours() < 12){
        return 'day';
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
        return 'day';
    } else {
        return 'night';
    };
  }

  return (
    <>
      {location === '' || climate === '' ? (
        <ImageLoading source={require('../../../assets/climate/loading.gif')} />
      ) : (
        <Container period={setPeriod()}>
          <Header period={setPeriod()} climate={climate} onPress={getLocation} />
          <BackgroudSecondary period={setPeriod()}></BackgroudSecondary>
          {getClimateImage(typeWeather)}
          <Degrees>{parseInt(temperature)}°C</Degrees>
          <NameCity>{city}</NameCity>
          <AdditionalInformation
            maxTemperature={maxTemperature}
            minTemperature={minTemperature}
            wind={wind}
            humidity={humidity}
          />
        </Container>
      )}
    </>
  );
};
