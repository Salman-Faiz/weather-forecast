import { useContext } from 'react';
import pinSvg from '../../assets/pin.svg'
import { WeatherContext } from '../../context';
import { getFormattedData } from '../../utils/data-util';

import CloudsIcon from '../../assets/cloud.svg';
import HazeIcon from '../../assets/haze.svg';
import SnowIcon from '../../assets/icons/snow.svg';
import SunnyIcon from '../../assets/icons/sunny.svg';
import RainyIcon from '../../assets/rainy.svg';
import ThunderIcon from '../../assets/thunder.svg';

const WeatherHeadline = () => {
	const {  weatherData } = useContext(WeatherContext);
	const { climate,temperature, location,time} = weatherData
	function getWeatherIcon(climate){
		switch(climate){
			case "Rain":
			return RainyIcon;
			case "Clouds":
			return CloudsIcon;
			case "Clear":
			return SunnyIcon;
			case "Snow":
			return SnowIcon;
			case "Fog":
			return HazeIcon;
			case "Haze":
			return HazeIcon;
			case "Mist":
			return HazeIcon;

			default :
			return SunnyIcon;
		}
	}
    return (
        <div>
							<div className="max-md:flex items-center justify-between md:-mt-10">
								<img src={getWeatherIcon(climate)} alt="climate" />
								<div className="max-md:flex items-center max-md:space-x-4">
									<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
									<div className="flex items-center space-x-4 md:mb-4">
										<img src={pinSvg} />
										<h2 className="text-2xl lg:text-[50px]">{location}</h2>
									</div>
								</div>
							</div>
							<p className="text-sm lg:text-lg">{getFormattedData(time,"time",false)} - {getFormattedData(time,"date",false)}</p>
						</div>
    );
};

export default WeatherHeadline;