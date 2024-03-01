import DisplayContact from "./displayContact";
import { Route, Routes } from "react-router-dom";
import DefaultPage from "./DefaultPage";

function Display() {
  return (
      <Routes>
          <Route path="/" Component={DefaultPage} />
          <Route path="/contact/:id" Component={DisplayContact}/>
      </Routes>
  );
}

export default Display;