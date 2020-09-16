import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import TextInputField from '../common/TextInputField';

const AddWarehouse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <>
            <h1>Create New Task</h1>
            <TextInputField
                label="Title of this Task"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextInputField
                label="Description of this Task"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Button component={Link} to="/task/main" variant="contained">
                Next
            </Button>
        </>
    )
}

export default AddWarehouse;