import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

function Archived() {
  return (
    <Button sx={{textTransform:'none', ':hover':{backgroundColor:'white'}}}>
        <Grid container justifyContent='space-between' margin={0.5} alignItems='center'>
            <Grid item xs={1} margin='0px 8px' marginTop={1}>
                <ArchiveOutlinedIcon fontSize= 'small' sx={{color:"#00a884"}}/>
            </Grid>
            <Grid item xs={10}>
                <Typography fontFamily={font} align="left" color='#111B21' fontSize='17px'>
                    Archived
                </Typography>
            </Grid>
        </Grid>
    </Button>
  );
}

export default Archived;
