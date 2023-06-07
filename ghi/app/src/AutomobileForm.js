import React, { useEffect, useState } from 'react';

function AutomobileForm() {
  const [models, setModels] = useState([])
  const [formData, setFormData] = useState({
    color: '',
    year: '',
    vin: '',
    models: '',
  })

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setModels(data.models);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:8100/api/automobiles/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFormData({
        color: '',
        year: '',
        vin: '',
        models: '',
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
          <h1>Add an automobile to inventory</h1>
          <form onSubmit={handleSubmit} id="create-vehiclemodel-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
              <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} required name="Model" id="model" className="form-select">
                <option value="">Choose a model</option>
                {models.map(model => {
                  return (
                    <option key={model.id} value={model.id}>{model.name}</option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AutomobileForm;
