import React from "react";
import "./Appointment.css";

import Popup from "reactjs-popup";
import "./PatientInfo.css";

const AppointmentCard = (props) => {
  console.log(props.appointment);
  const { id, subject, visitingHour, totalSpace } = props.appointment;
  console.log(id);
  return (
    <>
      <div className="col-md-4 mb-5">
        <div className="card appointment-card">
          <div className="card-body text-center">
            <h5 className="card-title text-info">{subject}</h5>
            <h6>{visitingHour}</h6>
            <p>{totalSpace} SPACES AVAILABLE</p>
            <Popup
              trigger={
                <button className="btn btn-info text-uppercase">
                  Book appointment
                </button>
              }
              modal
            >
              {(close) => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="header"> {subject} </div>
                  <div className="content">{/* form */}</div>
                  <div className="actions">
                    <Popup
                      trigger={<button className="button"> Send</button>}
                      position="top center"
                      closeOnDocumentClick
                    >
                      <span></span>
                    </Popup>
                    <button
                      className="button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close modal
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
