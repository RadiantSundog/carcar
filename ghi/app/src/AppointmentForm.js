import React, { useEffect, useState } from 'react';


function AppointmentForm() {
  const [technicians, setTechnicians] = useState([])
  const [formData, setFormData] = useState({
    vin: '',
    status: '',
    customer: '',
    date_time: '',
    technician: '',
    reason: '',
  })
  const fetchData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();


    const appointmentsUrl = 'http://localhost:8080/api/appointments/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const appointmentsResponse = await fetch(appointmentsUrl, fetchConfig);

    if (appointmentsResponse.ok) {
      setFormData({
        vin: '',
        status: '',
        customer: '',
        date_time: '',
        technician: '',
        reason: '',
      });
    }
  }
  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;

    setFormData({
      ...formData,
      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a service appointment</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
              <label htmlFor="name">Automobile Vin</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
              <label htmlFor="customer">Customer</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Date_time" required type="date" name="date_time" id="date_time" className="form-control" />
              <label htmlFor="date_time">Date</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Date_time" required type="time" name="date_time" id="date_time" className="form-control" />
              <label htmlFor="date_time">Time</label>
            </div>

            <div className="mb-3">
              <select onChange={handleFormChange} required name="technician" id="technician" className="form-select">
                <option value="">Technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.id} value={technician.id}>{technician.first_name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="description">Reason</label>
              <textarea onChange={handleFormChange} id="reason" rows="3" name="reason" className="form-control"></textarea>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm;
