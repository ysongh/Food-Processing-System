import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const TextInputField = ({
    name,
    placeholder,
    value,
    label,
    type,
    onChange,
}) => {
    return(
        <FormControl fullWidth={true} margin="normal">
            <TextField
              type={type}
              placeholder={placeholder}
              name={name}
              label={label}
              value={value}
              onChange={onChange}
              variant="outlined"/>
        </FormControl>
    );
};

export default TextInputField;