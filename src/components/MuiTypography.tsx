import React from 'react';
import {Typography} from "@mui/material";

const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>
                H1 Heading
            </Typography>
            <Typography variant='h2'>
                H2 Heading
            </Typography>
            <Typography variant='h3'>
                H3 Heading
            </Typography>
            <Typography variant='h4' component='h1' gutterBottom>
                H4 Heading
            </Typography>
            <Typography variant='h5'>
                H5 Heading
            </Typography>
            <Typography variant='h6'>
                H6 Heading
            </Typography>
            <Typography variant='h6'>
                H6 Heading
            </Typography>
            <Typography variant='subtitle1'>
                this is subtitle 1, it's h6 tag but has different style
            </Typography>
            <Typography variant='subtitle2'>
                this is subtitle 2, it's h6 tag but has different style
            </Typography>
            <Typography variant='body1'>
                Typography's default style
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <hr/>
            <Typography variant='body2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </div>
    )
}

export default MuiTypography;
