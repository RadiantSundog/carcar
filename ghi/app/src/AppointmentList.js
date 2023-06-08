import React, { useState, useEffect } from "react";




function AppointmentList() {
  const [appointments, setAppointments] = useState([])
  useEffect(() => {fetchdata()}, [])
  const fetchdata = async () => {
      const response = await fetch('http://localhost:8080/api/appointments/');
      if (response.ok) {
          const data = await response.json();
          setAppointments(data.appointments);
      } else {
          console.error(response);
        }
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
                      <td>{ "No "}</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.date_time }</td>
                      <td>{ appointment.technician.first_name }</td>
                      <td>{ appointment.reason }</td>
                      <td><button onClick={() => this.cancelClick(appointment.id)} type="button" className="btn btn-danger">Cancel</button></td>
                      <td><button onClick={() => this.finish(appointment.id)} type="button" className="btn btn-success">Finish</button></td>
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </>
        );
}

export default AppointmentList;
