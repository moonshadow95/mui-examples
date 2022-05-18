import React, {useState} from 'react';
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel} from "@mui/material";
import {Bookmark, BookmarkBorder} from "@mui/icons-material";

const MuiCheckbox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({acceptTnC})
    console.log({skills})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox checked={acceptTnC}
                                       onChange={handleChange}
                    />}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder/>}
                    checkedIcon={<Bookmark/>}
                    checked={acceptTnC}
                    onChange={handleChange}
                    color='success'
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormControlLabel control={<Checkbox value='html' checked={skills.includes('html')}
                                                         onChange={handleSkillChange}/>} label='HTML'/>
                    <FormControlLabel
                        control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange}/>}
                        label='CSS'/>
                    <FormControlLabel control={<Checkbox value='javascript' checked={skills.includes('javascript')}
                                                         onChange={handleSkillChange}/>}
                                      label='JavaScript'/>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox;
