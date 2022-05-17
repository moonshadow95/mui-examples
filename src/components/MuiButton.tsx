import React, {useState} from 'react';
import {Button, ButtonGroup, IconButton, Stack, ToggleButtonGroup, ToggleButton} from "@mui/material";
import {Send, FormatBold, FormatItalic, FormatUnderlined, Sell, SendSharp} from "@mui/icons-material"

const MuiButton = () => {
    const [formats, setFormats] = useState<string[] | null>(null)
    console.log(formats)
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]): void => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com'>Text, this is anchor tag</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='success'>Success</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' startIcon={<SendSharp/>} disableRipple
                        onClick={() => alert('!!')}>send</Button>
                <Button variant='contained' endIcon={<Send/>} disableElevation>send</Button>
                <IconButton aria-label='send' size='large' color='secondary'>
                    <Send/>
                </IconButton>
            </Stack>
            <Stack spacing={2} direction='row'>
                <ButtonGroup
                    variant='contained'
                    orientation='vertical'
                    color='warning'
                    aria-label='alignment button group'
                >
                    <Button>left</Button>
                    <Button>center</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup
                    aria-label='text formatting'
                    value={formats}
                    size='large'
                    color='success'
                    orientation='vertical'
                    onChange={handleFormatChange}
                    exclusive
                >
                    <ToggleButton value='bold' aria-label='bold'>
                        <FormatBold/>
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'>
                        <FormatItalic/>
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'>
                        <FormatUnderlined/>
                    </ToggleButton>

                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
};

export default MuiButton;
