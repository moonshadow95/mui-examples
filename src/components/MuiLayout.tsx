import React from 'react';
import {Box} from "@mui/material";

const MuiLayout = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}>Codevolution</Box>
            <Box display='flex' alignItems='center' justifyContent='space-around' height='100px' width='100px'
                 bgcolor='success.light' p={4}>
                <Box height='20px' width='20px' bgcolor='warning.light'></Box>
                <Box height='20px' width='20px' bgcolor='warning.light'></Box>
                <Box height='20px' width='20px' bgcolor='warning.light'></Box>
            </Box>
        </>
    )
}
export default MuiLayout;
