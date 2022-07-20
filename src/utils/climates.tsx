import { CLIMATES } from "./types";

import { ClimateImage } from "../components/ClimateImage";

/**
 * Função para selecionar o clima atual
 * - climate: clima atual
 */

export function getClimateImage(climate: string){
    switch(climate) {
        case CLIMATES.Ash:
            return <ClimateImage type={5} />;
        case CLIMATES.Clear:
            return <ClimateImage type={6} />;
        case CLIMATES.Clouds:
            return <ClimateImage type={7} />;
        case CLIMATES.Drizzle:
            return <ClimateImage type={2} />;
        case CLIMATES.Dust:
            return <ClimateImage type={5} />;
        case CLIMATES.Fog:
            return <ClimateImage type={5} />;
        case CLIMATES.Haze:
            return <ClimateImage type={5} />;
        case CLIMATES.Mist:
            return <ClimateImage type={5} />;
        case CLIMATES.Rain:
            return <ClimateImage type={3} />;
        case CLIMATES.Sand:
            return <ClimateImage type={5} />;
        case CLIMATES.Smoke:
            return <ClimateImage type={5} />;
        case CLIMATES.Snow:
            return <ClimateImage type={4} />;
        case CLIMATES.Squall:
            return <ClimateImage type={5} />;
        case CLIMATES.Thunderstorm:
            return <ClimateImage type={1} />;
        case CLIMATES.Tornado:
            return <ClimateImage type={5} />;
    };
}