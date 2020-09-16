import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInputField from '../common/TextInputField';

const Tasks = () => {
    const [gtin, setgtin] = useState("");
    const [gln, setgln] = useState("");
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
            <TextInputField
                label="Please Input GTIN"
                name="gtin"
                type="number"
                value={gtin}
                onChange={(e) => setgtin(e.target.value)}
            />
            <TextInputField
                label="Please Input GLN"
                name="gln"
                type="number"
                value={gln}
                onChange={(e) => setgln(e.target.value)}
            />
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

export default Tasks;