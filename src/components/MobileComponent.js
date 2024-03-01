import SideBar from "./SideBar";
import DisplayContact from "./displayContact";
import { Route, Routes } from "react-router-dom";


function MobileComponent() {
    return (
        <Routes>
            <Route path="/" Component={SideBar} />
            <Route path="/contact/:id" Component={DisplayContact}/>
        </Routes>
    );
}

export default MobileComponent;