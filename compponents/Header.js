import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
// import img from '../public/assets/buyCar.png'
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ padding: 10 }}>
                <Grid>
                    <Stack direction="row" spacing={2} justifyContent='center' alignItems='center'>
                        {/* <Avatar alt="Remy Sharp" src='../public/assets/buyCar.png' /> */}
                        <Typography variant='h6' >
                            Reminder
                        </Typography>
                    </Stack>
                </Grid>
            </AppBar>
        </Box>
    );
}