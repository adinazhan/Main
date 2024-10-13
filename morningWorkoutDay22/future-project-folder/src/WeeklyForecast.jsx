import Dayforecast from "./DayForecast";

function Weeklyforecast(props) {
  return (
    <>
      <div className="row">
        <Dayforecast
          day="Mon"
          daytemp="18"
          nighttemp="11"
          weather="weather-rainy"
        />
        <Dayforecast
          day="Tue"
          daytemp="13"
          nighttemp="3"
          weather="weather-snowy"
        />
        <Dayforecast
          day="Wed"
          daytemp="15"
          nighttemp="4"
          weather="weather-stormy"
        />
        <Dayforecast
          day="Thur"
          daytemp="11"
          nighttemp="5"
          weather="weather-rainy"
        />
        <Dayforecast
          day="Fri"
          daytemp="19"
          nighttemp="6"
          weather="weather-sunny"
        />
        <Dayforecast
          day="Sat"
          daytemp="22"
          nighttemp="7"
          weather="weather-cloudy"
        />
        <Dayforecast
          day="Sun"
          daytemp="7"
          nighttemp="10"
          weather="weather-rainy"
        />
      </div>
    </>
  );
}

export default Weeklyforecast;
