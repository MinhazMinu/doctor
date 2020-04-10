import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = (props) => {
  return (
    <div className="col-md-6 align-self-end pr-5 ">
      <div className="calender-area">
        <h3 className="text-uppercase col-12 mb-5">Appointment</h3>
        <Calendar
          onChange={(d) => props.handleDate(d)}
          value={props.date}
          minDate={new Date()}
          minDetail={"year"}
        />
      </div>
    </div>
  );
};

export default Calender;
