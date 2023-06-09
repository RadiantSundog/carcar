import React, { useState, useEffect } from "react";


function AppointmentList() {
  const [appointments, setAppointments] = useState([])
  const [autos, setAutos] = useState([])
  useEffect(() => {fetchdata()}, [])
  const fetchdata = async () => {
      const response = await fetch('http://localhost:8080/api/appointments/');
      if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments.filter(appointment=>appointment.status==""));
      } else {
          console.error(response);
        }

      const automobiles_url = 'http://localhost:8100/api/automobiles/';
      const automobiles_response = await fetch(automobiles_url);
      if (automobiles_response.ok) {
          const data = await automobiles_response.json();
          setAutos(data.autos);
      }
  }

function isSold(vin){
  let result = "No"
  for (const auto of autos){
    if(auto["vin"] === vin){
      result = "Yes";
    }
  }
  return result;
}

const cancelClick = async(id) => {
  const url = `http://localhost:8080/api/appointments/${id}/cancel`;
  const fetchConfig = {
    method: "put",
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const cancelResponse = await fetch(url, fetchConfig);
}


const finishClick = async(id) => {
  const url = `http://localhost:8080/api/appointments/${id}/finish`;
  const fetchConfig = {
    method: "put",
    body: JSON.stringify(),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const finishResponse = await fetch(url, fetchConfig);
}

    return (
        <>
            <h1>Service Appointments</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Is VIP?</th>
                  <th>Customer</th>
                  <th>Date_&_Time</th>
                  <th>Technician</th>
                  <th>Reason</th>
                </tr>
              </thead>
                <tbody>
                  {appointments.map(appointment => {
                    return (
                    <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ isSold(appointment.vin) }</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.date_time }</td>
                      <td>{ appointment.technician.first_name }</td>
                      <td>{ appointment.reason }</td>
                      <td><button onClick={(e) => cancelClick(appointment.id)} type="button" className="btn btn-danger">Cancel</button></td>
                      <td><button onClick={(e) => finishClick(appointment.id)} type="button" className="btn btn-success">Finish</button></td>
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </>
        );
}

export default AppointmentList;
