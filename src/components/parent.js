import { Grid } from "@mui/material";
import MyDrawer from "./Drawer";
import Display from "./Display";



function Parent() {
    return (
        <Grid container >
            <Grid item xs={12} sm={6} md={4.8} lg={3.6}>
                <MyDrawer />
            </Grid>
            <Grid item sm={6} md={7.2} lg={8.4} component="main"   sx={{flexGrow: 1, padding:'0px', margin:'0px', position:'relative', height:'100%'}}>
                <Display />
            </Grid>
        </Grid>
    );
}

export default Parent;
