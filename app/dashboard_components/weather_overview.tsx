import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { FaCloudRain, FaCloud} from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
export default function WeatherOverview() {
  return (
    <div className="relative card-themed p-3  row-span-2 h-full flex flex-col">
      <p className="absolute top-2 right-2 text-text-muted text-xs font-light">
        Source: Weather API
      </p>

      <h2 className="text-xl font-light">Weather</h2>
      <div className="flex justify-center items-center gap-6 py-8">
        <div className="flex items-center gap-3">
          <IoMdSunny className="w-12 h-12 text-yellow-500" />
          <div>
            <p className="text-2xl font-light">72°F</p>
            <p className="text-sm text-text-secondary">Sunny</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaCloud className="w-12 h-12 text-gray-100" />
          <div>
            <p className="text-2xl font-light">24℃</p>
            <p className="text-sm text-text-secondary">Cloudy</p>
          </div>
        </div>
      </div>
      <h3 className="text-lg my-4 font-light">Forecast</h3>
      <div className="flex items-center gap-2 bg-bg-primary/50 rounded-lg divide-x-2 divide-border-primary  py-4">
        <div className="px-4 flex-1">
          <IoMdSunny className="w-12 h-12 text-yellow-500" />
          <p className="text-sm text-text-secondary">Mon</p>
          <p className="text-lg font-light">20℃</p>
        </div>
        <div className="px-2 flex-1">
          <FaCloud className="w-12 h-12 text-gray-100" />
          <p className="text-sm text-text-secondary">Tue</p>
          <p className="text-lg font-light">22℃</p>
        </div>
        <div className="px-2 flex-1">
          <FaCloud className="w-12 h-12 text-gray-100" />
          <p className="text-sm text-text-secondary">Wed</p>
          <p className="text-lg font-light">24℃</p>
        </div>
        <div className="px-2 flex-1">
          <FaCloud className="w-12 h-12 text-gray-100" />
          <p className="text-sm text-text-secondary">Thu</p>
          <p className="text-lg font-light">21℃</p>
        </div>
        <div className="px-2 flex-1">
          <FaCloud className="w-12 h-12 text-gray-100" />
          <p className="text-sm text-text-secondary">Fri</p>
          <p className="text-lg font-light">18℃</p>
        </div>
      </div>

      <h3 className="text-lg mt-4 font-light">Sensor Data</h3>
      <div className="flex flex-col justify-start gap-2 divide-border-primary divide-y">
        <div className="flex flex-row justify-start items-center">
          <FaTemperatureQuarter className="w-6 h-6" />
          <div className="p-2 flex-1">
            <p className="text-sm text-text-secondary">Temperature</p>
            <p className="text-lg font-light">22.5℃</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          <FaDroplet className="w-6 h-6" />
          <div className="p-2 flex-1">
            <p className="text-sm text-text-secondary">Humidity</p>
            <p className="text-lg font-light">60%</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          <FaWind className="w-6 h-6" />
          <div className="p-2 flex-1">
            <p className="text-sm text-text-secondary">Wind Speed</p>
            <p className="text-lg font-light">5 km/h</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center">
          <FaCloudRain className="w-6 h-6" />
          <div className="p-2 flex-1">
            <p className="text-sm text-text-secondary">Rain Sensor</p>
            <p className="text-lg font-light">0 mm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
