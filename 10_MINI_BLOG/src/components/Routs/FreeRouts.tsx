import { Route } from "react-router-dom";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

export const FreeRouts = (
    <>
        {/* free routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </>
)