import React, { useState, useEffect } from "react";


function AutomobilesList() {
    const [autos, setAutos] = useState([])
    useEffect(() => {fetchdata()}, [])
    const fetchdata = async () => {
        const response = await fetch('http://localhost:8100/api/automobiles/');
        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
        } else {
            console.error(response);
          }
    }

    function Sold() {
        let result = "No";
        for (const auto of autos) {
            if (auto["sold"] === true) {
                result = "Yes";
            }
        }
        return result;
    }

    return (
        <>
            <h1>Automobiles</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(auto => {
                        return (
                            <tr key={auto.id}>
                                <td>{ auto.vin }</td>
                                <td>{ auto.color }</td>
                                <td>{ auto.year }</td>
                                <td>{ auto.model.name }</td>
                                <td>{ auto.model.manufacturer.name }</td>
                                <td>{ Sold(auto.sold) }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default AutomobilesList
