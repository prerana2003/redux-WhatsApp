import { Button, Grid } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const font = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  padding:'0, 4, 0, 65px',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  fontSize:'small'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(8)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function Filter({onSearch}) {

    return (
        <Grid container alignItems='center' sx={{padding: '8px 5px'}}>
            <Grid item xs={11}>
                <Search sx={{backgroundColor:'#F0F2F5', borderRadius:'8px'}}>
                    <SearchIconWrapper>
                        <SearchIcon fontSize="small" color="#F0F2F5"/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        sx={{ fontSize:'small', fontFamily:font}}
                        placeholder="Search or start new chat"
                        onChange={(event)=>{onSearch(event.target.value)}}
                    />
                </Search>
            </Grid>
            <Grid xs={1} >
                <Button sx={{minWidth:0, color:'#54656f'}}><FilterListIcon fontSize="small" margin='0px 7px' /></Button>
            </Grid>
            
        </Grid>
    );
}

export default Filter;
