import React, {useState} from 'react';
import {Box, MenuItem, TextField} from "@mui/material";

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <Box width='250px'>
            <TextField label='Select country' select value={countries} onChange={handleChange} fullWidth
                       SelectProps={{multiple: true}} size='small' color='secondary'
                       helperText='Please Select your country'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='CN'>China</MenuItem>
                <MenuItem value='JP'>Japan</MenuItem>
                <MenuItem value='KO'>Korea</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect;
