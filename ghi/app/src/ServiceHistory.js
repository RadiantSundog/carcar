import React, { useState, useEffect } from "react";



function ServiceHistoryList() {
  const [appointments, setAppointments] = useState([])
  const [query, setQuery] = useState("")

  const filteredAppointments = appointments.filter(appointment => {
    return appointment.vin.toLowerCase().includes(query.toLowerCase())
  })
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
            <h1>Service History</h1>
            <input
            type="search"
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by VIN..."
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Is VIP?</th>
                  <th>Customer</th>
                  <th>Date_&_Time</th>
                  <th>Technician</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
                <tbody>
                  {filteredAppointments.map(appointment => {
                    return (
                    <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ "No" }</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.date_time }</td>
                      <td>{ appointment.technician.first_name }</td>
                      <td>{ appointment.reason }</td>
                      <td>{ appointment.status }</td>
                    </tr>
                    );
                  })}
                </tbody>
            </table>
        </>
        );
}

export default ServiceHistoryList;
