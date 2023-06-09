import React, { useState, useEffect } from 'react';


function SalespeopleHistoryList() {
    const [salespeople, setSalespeople] = useState([])
    const [sales, setSales] = useState([])
    const [query, setQuery] = useState("")
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
            const data = await sales_response.json();
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
                <select value={query} onChange={e => setQuery(e.target.value)} required name="salesperson" id="salesperson" className="form-select">
                    <option value="">Choose a salesperson</option>
                    {salespeople.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.first_name }>{salesperson.first_name + " " + salesperson.last_name}</option>
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
                    {sales.filter(sale=> sale.salesperson.first_name === query) .map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{ sale.salesperson.first_name } { sale.salesperson.last_name }</td>
                                <td>{ sale.customer.first_name } { sale.customer.last_name }</td>
                                <td>{ sale.automobile.vin }</td>
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
