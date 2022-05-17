import React, {useState} from 'react';
import {InputAdornment, Stack, TextField} from "@mui/material";

const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'/>
                <TextField label='Name' variant='filled'/>
                <TextField label='Name' variant='standard'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField size='small' color='secondary' label='Small secondary'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField color='secondary' label='Form Input' required value={value}
                           onChange={(e) => setValue(e.target.value)} error={!value}
                           helperText={!value ? 'Required' : 'Do not share your password with anyone'}/>
                <TextField color='warning' label='Password' type='password'
                           helperText='Do not share your password with anyone'/>
                <TextField label='Disabled' variant='outlined' disabled/>
                <TextField label='Read only' variant='outlined' InputProps={{readOnly: true}} value='Read only'/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Price' variant='outlined'
                           InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}
                />
                <TextField label='Weight' variant='outlined'
                           InputProps={{endAdornment: <InputAdornment position='end'>Kg</InputAdornment>}}
                />
            </Stack>
        </Stack>
    )
};

export default MuiTextField;
