import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import myProfile from '../assets/profile1.jpg'

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
const drawerWidth = 430;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

const PersistentDrawer=({btnClick, open, theme, handleDrawerClose})=>{
    return(
        <Drawer
            sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                xs:{
                    width: "100%",
                },
                sm:{
                    width: 384,
                },
                md:{
                    width: drawerWidth,
                },
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            
            <Box>
                {(btnClick==='groupIcon')?
                        <Box display='flex' justifyContent='flex-end' flexDirection='column' alignItems='left' direction='row' sx={{bottom:0, color:'white',height:'108px', backgroundColor:'#008069', padding:'0px 20px 0px 23px'}}>
                            <Box display='flex' flexDirection='row' alignItems='center' paddingBottom={1.5}>
                                <IconButton sx={{color:'white', paddingRight:3.5}} onClick={handleDrawerClose}>
                                    <ArrowBackIcon/>
                                </IconButton>
                                <Typography variant='h6' fontFamily={font} fontSize='19px'>
                                    Communities
                                </Typography>
                            </Box>
                        </Box>
                    :
                    ''
                }
                {(btnClick==='status')?
                    <Box>
                        <Box display='flex' justifyContent='flex-end' flexDirection='column' alignItems='left' direction='row' sx={{bottom:0, color:'white',height:'108px', backgroundColor:'#008069', padding:'0px 20px 0px 23px'}}>
                            <Box display='flex' flexDirection='row' alignItems='center' paddingBottom={1.5}>
                                <IconButton sx={{color:'white', paddingRight:3.5}} onClick={handleDrawerClose}>
                                    <ArrowBackIcon/>
                                </IconButton>
                                <Typography variant='h6' fontFamily={font} fontSize='19px'>
                                    Status
                                </Typography>
                            </Box>
                        </Box>
                        <Box marginTop={1.5} paddingLeft='2px'>
                            <Grid container>
                                <Grid item xs={2} padding={2}>
                                    <Avatar src={myProfile}></Avatar>
                                </Grid>
                                <Grid container xs={10} direction='column' margin={2}>
                                    <Grid item>
                                        <Typography>My Status</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>No Updates</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                                    
                        </Box>
                    </Box>
                    : ''
                }
                {(btnClick==='channels')?
                    <Box display='flex' justifyContent='flex-end' flexDirection='column' alignItems='left' direction='row' sx={{bottom:0, color:'white',height:'108px', backgroundColor:'#008069', padding:'0px 20px 0px 23px'}}>
                        <Box display='flex' flexDirection='row' alignItems='center' paddingBottom={1.5}>
                            <IconButton sx={{color:'white', paddingRight:3.5}} onClick={handleDrawerClose}>
                                <ArrowBackIcon/>
                            </IconButton>
                            <Typography variant='h6' fontFamily={font} fontSize='19px'>
                                Channels
                            </Typography>
                        </Box>
                    </Box> 
                    : ''
                }
                {(btnClick==='newChat')?
                    <Box display='flex' justifyContent='flex-end' flexDirection='column' alignItems='left' direction='row' sx={{bottom:0, color:'white',height:'108px', backgroundColor:'#008069', padding:'0px 20px 0px 23px'}}>
                        <Box display='flex' flexDirection='row' alignItems='center' paddingBottom={1.5}>
                            <IconButton sx={{color:'white', paddingRight:3.5}} onClick={handleDrawerClose}>
                                <ArrowBackIcon/>
                            </IconButton>
                            <Typography variant='h6' fontFamily={font} fontSize='19px' paddingRight={27}>
                                New Chat
                            </Typography>
                            <IconButton sx={{color:'white'}} onClick={handleDrawerClose}>
                                <AddIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                    : ''
                }

            </Box>
        </Drawer>
    )
}

export default PersistentDrawer