import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import axios from '../../axios';
import TextInputField from '../common/TextInputField';
import TextAreaField from '../common/TextAreaField';
import DateInputField from '../common/DateInputField';

const AddTask = () => {
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [detail, setDetail] = useState("");
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");

    const onSubmit = async () => {
        try{
            const taskData = { title, description, detail, destination, startDate }
            await axios.post('/task/create', taskData);

            history.push('/task/main');
        } catch(err){
            console.error(err);
        }
    }

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
            <TextAreaField
                label="Description of this Task"
                name="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <TextAreaField
                label="Detail of this Task"
                name="detail"
                type="text"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
            />
            <TextInputField
                label="Destination"
                name="destination"
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />

            <DateInputField
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <Button onClick={() => onSubmit()} variant="contained">
                Create
            </Button>
        </>
    )
}

export default AddTask;