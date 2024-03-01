import {Avatar, Toolbar, Typography, Grid, ListItemAvatar, ListItemText, Button, IconButton} from "@mui/material"
import React from "react";
import { useState, useEffect } from "react";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch, useSelector } from "react-redux";
// import { setSelectedContact } from "../redux/selectedContactSlice";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "../hooks/useResponsive";

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const DisplayAppbar = ({id}) =>{
    const contacts = useSelector((state)=>state.contacts.contacts)
    const navigate = useNavigate();
    
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }, [id]);


    return(
                <Toolbar sx={{height:'66px', boxShadow:'none', backgroundColor:'#F0F2F5'}}>
                    {useResponsive().isMobile ? 
                        <Grid item xs={1}>
                            <ArrowBackIcon onClick={()=>{navigate('/');}} sx={{fontSize:'large'}}/>
                        </Grid>:''
                    }
                    <Grid item xs={2} sm={2} md={1.6} lg={1}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={contacts[id-1]["profileImg"]}></Avatar>  
                        </ListItemAvatar>
                    </Grid>
                    <Grid item xs={3} sm={4} md={6} lg={7}>
                        <Grid container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography sx={{ fontFamily:font, fontSize:'17px', color:'#111B21'}} component="label">
                                                {contacts[id-1]["Name"]}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </Grid>
                            {(!useResponsive().isMobile) ? 
                                <Grid item marginTop='-8px'>
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                {(alert) ?
                                                <Typography sx={{ fontFamily:font, fontSize:{sm:'9px', md:'14px'}, color:'#111B21'}} component="label">
                                                    click here for contact info
                                                </Typography> :''}
                                            </React.Fragment>
                                        }
                                    />                                                          
                                </Grid>
                                : ''
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={6} md={5} lg={4} textAlign='right' minWidth={0}>
                        <Button variant='outlined' sx={{borderRadius: 5, minWidth:{xs:0.3}, padding:{xs:0}, border:{xs:'0px', sm:'1px solid #d1d7db'}, ':hover':{border:'1px solid #d1d7db', bgcolor:'#F0F2F5'}}}>
                            <VideocamIcon sx={{minWidth:0, color:"#8696a0", padding:{sm:'5px'}}} /> {!useResponsive().isMobile ? <KeyboardArrowDownIcon sx={{color:"#8696a0"}}/>:''}    
                        </Button>
                        <Button sx={{':hover':{backgroundColor:'#F0F2F5'}, padding:0, minWidth:{xs:'0.3'}}}>
                            {!useResponsive().isMobile ? <SearchIcon sx={{color:"#8696a0"}} /> : ''}
                            {useResponsive().isMobile ? <CallIcon sx={{color:"#8696a0"}}/> : ''} 
                        </Button>
                        <Button sx={{minWidth:'0px', ':hover':{backgroundColor:'#F0F2F5'}}}>
                            <MoreVertIcon sx={{ color:"#54656f"}} />    
                        </Button>
                    </Grid>
                </Toolbar>
    )
}

export default DisplayAppbar