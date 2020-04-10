import React from "react";
import "./Appointment.css";

const AppointmentCard = (props) => {
  console.log(props.appointment);
  const { id, subject, visitingHour, totalSpace } = props.appointment;
  console.log(id);
  return (
    <div className="col-md-4 mb-5">
      <div className="card appointment-card">
        <div className="card-body text-center">
          <h5 className="card-title text-info">{subject}</h5>
          <h6>{visitingHour}</h6>
          <p>{totalSpace} SPACES AVAILABLE</p>
          <button className="btn btn-info text-uppercase">
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
