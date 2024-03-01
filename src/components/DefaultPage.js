import { Button, Grid, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import img from '../assets/img1.png'
import {Toolbar} from "@mui/material";

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

function DefaultPage() {

  return (
        <Grid marginBottom={0} sx={{height:'100vh', overflowY:'auto', scrollbarWidth: 'thin', backgroundColor: '#F0F2F5', boxShadow:'none'}} textAlign='center'>
          <Toolbar/>
            <img src={img} height='213px' width='348'/>
            <Typography component="h5" sx={{color:'#41525D',fontWeight:'small', fontSize:'32px', fontFamily:font, padding:'15px 0px 0px'}}>Download WhatsApp for Windows</Typography>
            <Typography component='p' sx={{marginTop:'18px', fontSize:'14px', color:'#667781', lineHeight:'20px'}}>Make calls, share yourscreen and get a faster experience when you download the Windows app.</Typography>
            <Typography component='p' sx={{marginTop:'0px', fontSize:'14px', color:'#667781', lineHeight:'20px'}}></Typography>
            <Button variant="contained" sx={{textAlign:'center', boxShadow:'none', textTransform: 'none', fontWeight:'bold', textShadow:'none', ':hover':{backgroundColor:'#006856'}, border:'1px solid transparent',borderRadius:'24px', padding:'7px 24px', marginTop:'18px', fontSize:'14px', backgroundColor:'#008069'}}>Get the app</Button>
            <Typography component='p' sx={{marginTop:10, fontSize:'14px', color:'#8696a0', lineHeight:'20px'}}><LockIcon fontSize="smaller"/> Your personal messages are end-toend encrypted</Typography>
          <Toolbar/>
        </Grid>
  );
}

export default DefaultPage;