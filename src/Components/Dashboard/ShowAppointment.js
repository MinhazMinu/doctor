import React from "react";

const ShowAppointment = (props) => {
  const entries = Object.entries(props.appointment);
  const [_id, name, phone, email, date] = entries;
  console.log(name[1]);

  return (
    <tr>
      <td>{name[1]}</td>
      <td>{date[1]}</td>
      <td>{phone[1]}</td>
      <td>{email[1]}</td>
    </tr>
  );
};

export default ShowAppointment;
