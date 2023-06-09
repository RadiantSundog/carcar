import React, { useState, useEffect } from "react";


function TechnicianList() {
    const [technicians, setTechnicians] = useState([])
    useEffect(() => {fetchdata()}, [])
    const fetchdata = async () => {
        const response = await fetch('http://localhost:8080/api/technicians/');
        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        } else {
            console.error(response);
          }
    }
    return (
      <>
        <h1>Technicians</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
                <tbody>
                  {technicians.map(technician => {
                    return (
                    <tr key={technician.id}>
                      <td>{ technician.employee_id }</td>
                      <td>{ technician.first_name }</td>
                      <td>{ technician.last_name }</td>
                    </tr>
                    );
                  })}
                </tbody>
            </table>
      </>
        );
}

export default TechnicianList;
