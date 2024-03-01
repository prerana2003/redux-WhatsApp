import { Grid } from "@mui/material";
import Display from "./Display";
import SideBar from "./SideBar";


function DesktopComponent() {
    
    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4.8} lg={3.6}>
                <SideBar />
            </Grid>
            <Grid item sm={6} md={7.2} lg={8.4} component="main"   sx={{flexGrow: 1, padding:'0px', margin:'0px', position:'relative', height:'100%'}}>
                <Display />
            </Grid> 
        </Grid>
    );
}

export default DesktopComponent;