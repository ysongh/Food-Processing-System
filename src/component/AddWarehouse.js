import React, { useState } from 'react';

const AddWarehouse = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    return(
        <>
            <h1>Add Warehouse</h1>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input
                name="location"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)} />

            <button>Create</button>
            <br />
        </>
    )
}

export default AddWarehouse;