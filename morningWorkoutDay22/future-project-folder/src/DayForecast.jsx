function Dayforecast(props) {
  return (
    <>
      <div className="week-forecast">
        <div className="day-forecast">
          <div className="day-forecast__header">{props.day}</div>
          <div className="day-forecast__body">
            <div className={"day-forecast__image " + props.weather}></div>
            <div className="day-forecast__temps">
              <span className="temp-day">{props.daytemp}</span>
              <span className="temp-night">{props.nighttemp}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dayforecast;
