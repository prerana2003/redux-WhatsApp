import { AppBar, Avatar, Box, Toolbar, Typography, Grid, ListItemAvatar, ListItemText, Button, IconButton} from "@mui/material"
import React from "react";
import { useState, useEffect } from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContact } from "../redux/selectedContactSlice";

const drawerWidth = 406;

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const DisplayAppbar = () =>{
    const selectedContact = useSelector((state)=>state.selectedContact.selectedContact)
    const dispatch = useDispatch();

    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }, [selectedContact]);

    return(
                <Toolbar sx={{height:'66px',boxShadow:'none', backgroundColor:'#F0F2F5'}}>
                    <Grid item xs={1} sx={{display:{sm:'none'}}}>
                        <ArrowBackIcon onClick={()=>dispatch(setSelectedContact("")) } sx={{fontSize:{xs:'large'}}}/>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1.6} lg={1}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={selectedContact["profileImg"]}></Avatar>  
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={3} sm={4} md={6} lg={7}>
                        <Grid container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography sx={{ fontFamily:font, fontSize:'17px', color:'#111B21'}} component="label">
                                                {selectedContact["Name"]}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>
                                <Grid item marginTop='-8px' sx={{display:{xs:'none', sm:'block'}}}>
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                {(alert) ?
                                                <Typography sx={{ fontFamily:font, display:{sm:'none'}, fontSize:{sm:'9px', md:'14px'}, color:'#111B21'}} component="label">
                                                    click here for contact info
                                                </Typography> :''}
                                            </React.Fragment>
                                        }
                                    />                                                          
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={6} md={5} lg={4} textAlign='right' minWidth={0}>
                        <Button variant='outlined' sx={{borderRadius: 5, minWidth:{xs:0.3}, padding:{xs:0}, border:{xs:'0px', sm:'1px solid #d1d7db'}, ':hover':{border:'1px solid #d1d7db', bgcolor:'#F0F2F5'}}}>
                            <VideocamIcon sx={{minWidth:0, color:"#8696a0", padding:{sm:'5px'}}} /> <KeyboardArrowDownIcon sx={{color:"#8696a0", display:{xs:'none', sm:'block'}}}/>    
                        </Button>
                        <Button sx={{':hover':{backgroundColor:'#F0F2F5'}, padding:0, minWidth:{xs:'0.3'}}}>
                            <SearchIcon sx={{color:"#8696a0", display:{xs:'none',sm:'block'}}} />
                            <CallIcon sx={{color:"#8696a0", display:{xs:'block',sm:'none'}}}/>   
                        </Button>
                        <Button sx={{minWidth:'0px', paddingRight:'0px', ':hover':{backgroundColor:'#F0F2F5'}}}>
                            <MoreVertIcon sx={{ color:"#54656f"}} />    
                        </Button>
                    </Grid>
                </Toolbar>
    )
}

export default DisplayAppbar