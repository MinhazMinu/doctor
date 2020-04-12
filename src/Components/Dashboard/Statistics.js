import React, { useEffect } from "react";
import SingleStatistic from "./SingleStatistic";
import { useState } from "react";
import ShowAppointment from "./ShowAppointment";

const Statistics = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://doctorback.herokuapp.com/bookedAppointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <>
      <div className="row my-5">
        <SingleStatistic
          classToAdd="bg-danger"
          data={{ title: "Pending Appointments", count: 10 }}
        />
        <SingleStatistic
          classToAdd="bg-info"
          data={{ title: "Today’s Appointments", count: 30 }}
        />
        <SingleStatistic
          classToAdd="bg-success"
          data={{ title: "Total Appointments", count: 40 }}
        />
        <SingleStatistic
          classToAdd="bg-warning"
          data={{ title: "Total  Patients", count: 70 }}
        />
      </div>
      <div className="bg-white rounded shadow-sm p-3 py-3 d-flex align-items-center justify-content-between">
        <table className="table ">
          <thead>
            <tr>
              <th className="text-secondary " scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Schedule
              </th>
              <th className="text-secondary" scope="col">
                Phone
              </th>
              <th className="text-secondary" scope="col">
                Email
              </th>
              <th className="text-secondary" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <ShowAppointment appointment={appointment}></ShowAppointment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistics;
