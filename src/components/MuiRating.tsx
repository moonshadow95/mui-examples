import React, {useState} from 'react';
import {Rating, Stack} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(3);
    console.log(value)
    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                precision={0.5}
                size='large'
                icon={<Favorite fontSize='inherit' color='warning'/>}
                emptyIcon={<FavoriteBorder fontSize='inherit' color='warning'/>}
                readOnly
                highlightSelectedOnly
            />
        </Stack>
    )
}

export default MuiRating;
