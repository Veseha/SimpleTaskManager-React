import React from 'react';
import axios, { AxiosResponse } from 'axios';

interface WeatherData {
    temperature_2m: number;
    rain: number;
}

export default class Weather {
    static async getCurrent(): Promise<WeatherData | undefined> {
        try {
            const response: AxiosResponse<WeatherData> = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.3199&longitude=76.9425&current=temperature_2m,rain');
            return response.data;
        } catch (e) {
            console.log(e);
            return undefined;
        }
    }
}
