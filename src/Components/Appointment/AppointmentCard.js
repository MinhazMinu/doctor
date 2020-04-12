import React from "react";
import "./Appointment.css";
import "./apc.css";
import { useForm } from "react-hook-form";

import Popup from "reactjs-popup";
import "./PatientInfo.css";
import { useState } from "react";

const AppointmentCard = (props) => {
  const { id, subject, visitingHour, totalSpace } = props.appointment;
  const [show, setShow] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("https://doctorback.herokuapp.com/makeBooking", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const Modal = () => (
    <Popup
      trigger={<button className=" btn btn-info">Book Appointment</button>}
      modal
      closeOnDocumentClick
    >
      <span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-primary mb-5">{subject}</h3>

          <input
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
            className="form-group"
          />

          {errors.name && <span>This field is required</span>}
          <br />
          <input
            name="phone"
            placeholder="Phone"
            ref={register({ required: true })}
            className="form-group"
          />

          {errors.phone && <span>This field is required</span>}
          <br />
          <input
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
            className="form-group"
          />

          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            name="date"
            defaultValue={` ${props.date.toLocaleString("default", {
              month: "long",
            })} ${props.date.getDate()} ${props.date.getFullYear()}`}
            ref={register({ required: true })}
            className="form-group"
          />

          {errors.date && <span>This field is required</span>}
          <br />
          <input type="submit" className="btn btn-info" />
        </form>{" "}
      </span>
    </Popup>
  );

  return (
    <>
      <div className="col-md-4 mb-5">
        <div className="card appointment-card">
          <div className="card-body text-center">
            <h5 className="card-title text-info">{subject}</h5>
            <h6>{visitingHour}</h6>
            <p>{totalSpace} SPACES AVAILABLE</p>
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
