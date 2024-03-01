import { Box, useMediaQuery, useTheme } from "@mui/material";
import MobileComponent  from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";
import { useResponsive } from "../hooks/useResponsive";

function Parent() {
    return (
        <Box>
            {useResponsive().isMobile? <MobileComponent/> : <DesktopComponent/>}
        </Box>
    );
}

export default Parent;