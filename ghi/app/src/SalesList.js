import React, { useState, useEffect } from "react";


function SalesList() {
    const [sales, setSales] = useState([])
    useEffect(() => {fetchdata()}, [])
    const fetchdata = async () => {
        const response = await fetch('http://localhost:8090/api/sales/');
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        } else {
            console.error(response);
          }
    }
    return (
        <>
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson Employee ID</th>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{ sale.salesperson.exmployee_id }</td>
                                <td>{ sale.salesperson.first_name + " " + sale.salesperson.last_name }</td>
                                <td>{ sale.customer.first_name + " " + sale.salesperson.last_name }</td>
                                <td>{ sale.automobilevo.vin }</td>
                                <td>{ sale.price }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default SalesList
