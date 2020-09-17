import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const DateInputField = ({
    name,
    value,
    label,
    onChange,
}) => {
    return(
        <FormControl fullWidth={true} margin="normal">
            <TextField
                label={label}
                name={name}
                type="date"
                value={value}
                variant="outlined"
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </FormControl>
    );
};

export default DateInputField;