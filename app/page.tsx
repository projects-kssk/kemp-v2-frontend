import LightSettings from "./dashboard_components/light_settings";
import ACControl from "./dashboard_components/ac_control";
import WindowSettings from "./dashboard_components/window_settings";
import SectionOverview from "./dashboard_components/section_overview";
import WeatherOverview from "./dashboard_components/weather_overview";

export default function DashboardPage() {
  return (
    <div className="h-full">
      {/* Activity Section */}
      <div className="h-full grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-[1fr_1fr] gap-3">
        {/* Live Section Overview */}
        <SectionOverview />

        {/* Weather */}
        <WeatherOverview />

        {/* Routines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 col-span-3 h-full">
          <WindowSettings />
          <LightSettings />

          <ACControl />

          <div className="card-themed p-3 grid grid-cols-1 gap-3 lg:col-start-4 lg:row-start-1 lg:row-span-2">
            <h2 className="text-xl font-light">Routines</h2>
            <h2 className=" font-light text-text-tertiary! text-center">
              Running "Default" routine
            </h2>
            <button className="flex gap-2 items-center justify-start rounded-lg btn-secondary">
              <span className="text-2xl ">🎛️</span>
              <span className="text-sm font-stretch-50%">Routines</span>
            </button>
            <button className="flex gap-2 items-center justify-start rounded-lg btn-secondary ">
              <span className="text-2xl ">➕</span>
              <span className="text-sm font-stretch-50%">
                Add manual specification
              </span>
            </button>
            <button className="flex gap-2 items-center justify-start rounded-lg btn-secondary ">
              <span className="text-2xl ">📊</span>
              <span className="text-sm font-stretch-50%">Routine Diary</span>
            </button>
            <button className="flex gap-2 items-center justify-start rounded-lg btn-secondary ">
              <span className="text-2xl ">⚙️</span>
              <span className="text-sm font-stretch-50%">
                Configure Routines
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}