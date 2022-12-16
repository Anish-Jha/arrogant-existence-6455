import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
function AllRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/SignIn" element={<SignIn/>}></Route>
            </Routes>
        </>
    )
}
export default AllRoutes;