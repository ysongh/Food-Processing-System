import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Warehouses = () => {
    const [warehouses] = useState([
        {
            "name": "Warehouse #1",
            "location": 'Queens'
        },
        {
            "name": "Warehouse #2",
            "location": 'Bronx'
        },
        {
            "name": "Warehouse #3",
            "location": 'Brooklyn'
        }
    ]);

    return(
        <>
            <h1>List of Warehouses</h1>
            <Link to="/addwarehouses">
                Add Warehouses
            </Link>
            { warehouses.map((warehouse, index)  => {
                return (
                    <div key={index}>
                        <h2>{warehouse.name}</h2>
                        <p>Location: {warehouse.location}</p>
                    </div>
                )
            }) }
        </>
    )
}

export default Warehouses;