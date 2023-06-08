import React, { useState, useEffect } from "react";



function ServiceHistoryList() {
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
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
//       appointments.filter((appointment) => {
      return appointments.vin.match(searchInput);
  }



    return (
        <>
            <h1>Service History</h1>
            <input type="search" placeholder="Search by VIN..." onChange={handleChange} value={searchInput} />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Is VIP?</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
                <tbody>
                  {appointments.map(appointment => {
                    return (
                    <tr key={appointment.id}>
                      <td>{ appointment.vin }</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.customer }</td>
                      <td>{ appointment.date_time }</td>
                      <td>{ appointment.technician }</td>
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
