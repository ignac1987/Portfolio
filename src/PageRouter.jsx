import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kommentar from "./Components/Admin/Kommentar";
import About from "./Components/About";
import App from "./App";
import Login from "./Components/Admin/Login";
import Modify from "./Components/Admin/ModifyKommentar";

function PageRouter() {

    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Kommentar" element={<Kommentar/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Modify/:id" element={<Modify/>}/>                
            </Routes>

        </BrowserRouter>
    )

}
export default PageRouter;