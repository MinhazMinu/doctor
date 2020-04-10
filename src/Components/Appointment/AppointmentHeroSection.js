import React, { useEffect } from "react";
import "./Appointment.css";
import img from "../../images/banner-img.png";
import Calender from "./Calender";
import { useState } from "react";
import AppointmentCard from "./AppointmentCard";
const AppointmentHeroSection = () => {
  const [date, setDate] = useState(new Date());
  const [appointmentType, setAppointmentType] = useState(null);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    fetch("http://localhost:3200/appointments")
      .then((res) => res.json())
      .then((data) => setAppointmentType(data));
  }, []);

  const handleDate = (d) => {
    setDate(d);
  };

  return (
    <>
      <div className="appointment-section">
        <div className="container">
          <div className="row" style={{ height: "100vh" }}>
            <Calender date={date} handleDate={handleDate} />
            <div className="col-md-6 align-self-center">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container Book-appointment-section ">
        <h3 className="text-info text-center py-5 ">
          Available Appointment On{" "}
          {date.toLocaleString("default", { month: "long" })} {date.getDate()},{" "}
          {date.getFullYear()}
        </h3>
        <div className="row">
          {appointmentType &&
            appointmentType.map((item) => (
              <AppointmentCard
                key={item.id}
                appointment={item}
              ></AppointmentCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppointmentHeroSection;
