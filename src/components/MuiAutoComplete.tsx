import React, {useState} from 'react';
import {Autocomplete, Box, Stack, TextField} from "@mui/material";

type Skill = {
    id: number
    label: string
}

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript']

const skillsOptions = skills.map((skill, index) => ({
    id: index + 1, label: skill
}))

const MuiAutoComplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);
    console.log({value})
    console.log({skill})
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills'/>}
                options={skills}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                freeSolo
            />
            <Autocomplete
                renderInput={(params) => <TextField {...params} label='Skills'/>}
                options={skillsOptions}
                value={skill}
                onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
            />
        </Stack>
    )
};

export default MuiAutoComplete;
