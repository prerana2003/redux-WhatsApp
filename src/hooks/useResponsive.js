import { useMediaQuery, useTheme } from "@mui/material"

export const useResponsive = () =>{
    const theme = useTheme()
    
    const responsive = {
        isMobile : useMediaQuery(theme.breakpoints.down('sm')),
        isTablet : useMediaQuery(theme.breakpoints.only('sm')),
        isLaptop : useMediaQuery(theme.breakpoints.only('md')),
        isDesktop : useMediaQuery(theme.breakpoints.only('lg')),
    }

    return responsive;
}