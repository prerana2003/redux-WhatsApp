import { Avatar, Button, Toolbar, Grid } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Stack} from "@mui/material";
import profile from '../assets/profile1.jpg'
import {IconButton} from "@mui/material";
import React, { useState } from "react";
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";


const options = [
    'New group',
    'New community',
    'Starred messages',
    'Select chats',
    'Settings',
    'Log out',
    'Get WhatsApp for Windows'
  ];
  
  const ITEM_HEIGHT = 307;

function ToolBar({onSetBtnClick, handleDrawerOpen}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        // setBtnClick('')
        // console.log(btnClick)
        setAnchorEl(null);
    };

    // console.log(btnClick)
    // console.log(btnClick)

  return (
    
        <Toolbar sx={{backgroundColor:'#F0F2F5', padding:'0px 16px', margin:0}}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <Grid item xs={2.5} sm={4} md={4}>
                    <Avatar sx={{marginRight:10}} src={profile}/>
                </Grid>
                <Grid item xs={9.5} sm={8} md={8} textAlign='right'>
                    <Stack direction="row" spacing={2.5}>
                        <IconButton id="groupIcon" onClick={(event)=>{handleDrawerOpen();onSetBtnClick('groupIcon')}} sx={{':hover':{backgroundColor:'#F0F2F5'}, minWidth:0, margin:'3px', padding:'3px',color:'#54656f'}}>
                            <GroupsIcon/>
                        </IconButton>
                        <IconButton id="status" onClick={(event)=>{handleDrawerOpen();onSetBtnClick('status')}} sx={{':hover':{backgroundColor:'#F0F2F5'}, minWidth:0, margin:'3px', padding:'3px',color:'#54656f'}}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>status-unread-outline</title><path fill-rule="evenodd" clip-rule="evenodd" d="M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z" fill="currentColor"></path><path d="M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z" fill="currentColor"></path><circle cx="19.95" cy="4.05005" r="3" fill="#009588"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"></path></svg>
                        </IconButton>
                        <IconButton id="channels" onClick={(event)=>{handleDrawerOpen();onSetBtnClick('channels')}} sx={{':hover':{backgroundColor:'#F0F2F5'}, minWidth:0, margin:'3px', padding:'3px',color:'#54656f'}}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>Channels</title><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8301 8.63404C16.3081 8.35745 16.9198 8.52076 17.1964 8.9988C17.7077 9.88244 18 10.9086 18 12C18 13.0914 17.7077 14.1176 17.1964 15.0012C16.9198 15.4792 16.3081 15.6425 15.8301 15.366C15.352 15.0894 15.1887 14.4776 15.4653 13.9996C15.8052 13.4122 16 12.7304 16 12C16 11.2696 15.8052 10.5878 15.4653 10.0004C15.1887 9.52237 15.352 8.91063 15.8301 8.63404ZM8.16995 8.63404C8.64798 8.91063 8.81129 9.52237 8.5347 10.0004C8.19484 10.5878 8 11.2696 8 12C8 12.7304 8.19484 13.4122 8.5347 13.9996C8.81129 14.4776 8.64798 15.0894 8.16995 15.366C7.69191 15.6425 7.08017 15.4792 6.80358 15.0012C6.29231 14.1176 6 13.0914 6 12C6 10.9086 6.29231 9.88244 6.80358 8.9988C7.08017 8.52076 7.69191 8.35745 8.16995 8.63404Z" fill="currentColor"></path><path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.33243 16.4826L5.09622 17.2728C4.86428 18.0487 4.62086 18.8707 4.41748 19.5825C5.12931 19.3791 5.95126 19.1357 6.72722 18.9038L7.51743 18.6676L8.24444 19.057C9.36447 19.6571 10.6412 20 12 20C16.4154 20 20 16.4154 20 12C20 7.58457 16.4154 4 12 4C7.58457 4 4 7.58457 4 12C4 13.3588 4.34295 14.6355 4.94296 15.7556L5.33243 16.4826ZM3.18 16.7C2.63 18.54 2 20.69 2 21C2 21.55 2.45 22 3 22C3.31 22 5.46 21.37 7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7Z" fill="currentColor"></path></svg>
                        </IconButton>
                        <IconButton id='newChat' onClick={(event)=>{handleDrawerOpen();onSetBtnClick('newChat')}} sx={{':hover':{backgroundColor:'#F0F2F5'}, minWidth:0, margin:'3px', padding:'3px',color:'#54656f'}}>
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class fill='none'><title>New Chat</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z"fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg>
                        </IconButton>
                        <IconButton aria-label="more" id="long-button" aria-controls={open ? 'long-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu id="long-menu"
                            MenuListProps={{'aria-labelledby': 'long-button',}}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center", }}
                            transformOrigin={{ vertical: "top", horizontal: "right", }}
                            PaperProps={{
                            style: { fontFamily:font, fontSize:'14.2px', maxHeight: ITEM_HEIGHT * 4.5, width: '222', padding:'9px 0px', color:'#3B4A54' },}}
                        >
                            {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} sx={{padding:'0 7 0 3'}}>
                                {option}
                            </MenuItem>
                            ))}
                        </Menu>
                    </Stack>
                </Grid>
            </Grid>
            
            
        </Toolbar>
        // </Grid>
  );
}

export default ToolBar;