import React, { useState, useEffect } from 'react';


function SalespeopleHistoryList() {
    const [salespeople, setSalespeople] = useState([])
    const [sales, setSales] = useState([])
    const fetchdata = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        } else {
            console.error(response);
            }
        const sales_url = 'http://localhost:8090/api/sales';
        const sales_response = await fetch(sales_url);
        if (sales_response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            <h1>Salesperson History</h1>
            <div className="mb-3">
                <select required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {salespeople.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>{salesperson.first_name + " " + salesperson.last_name}</option>
                    )
                    })}
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{ sale.salesperson }</td>
                                <td>{ sale.customer }</td>
                                <td>{ sale.vin }</td>
                                <td>{ sale.price }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default SalespeopleHistoryList
