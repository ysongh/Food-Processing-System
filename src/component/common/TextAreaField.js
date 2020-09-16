import React from 'react';
import { FormControl, TextField } from '@material-ui/core';

const TextAreaField = ({
    name,
    placeholder,
    value,
    label,
    onChange
}) => {
    return(
        <FormControl fullWidth={true} margin="normal">
            <TextField
              label={label}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              rows={5} 
              multiline />
        </FormControl>
    );
};

export default TextAreaField;