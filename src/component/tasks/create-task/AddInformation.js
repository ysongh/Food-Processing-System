import React from 'react';

import TextInputField from '../../common/TextInputField';
import TextAreaField from '../../common/TextAreaField';
import DateInputField from '../../common/DateInputField';

const AddInformation = ({ title, setTitle, description, setDescription, startDate, setStartDate }) => {
    return(
        <>
            <h1>Add Information</h1>
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

            <DateInputField
                label="Start Date"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
        </>
    )
}

export default AddInformation;