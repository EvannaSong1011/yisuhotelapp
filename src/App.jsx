import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import HotelList from "./pages/HotelList";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/list" element={<HotelList />} />*/}
            </Routes>
        </BrowserRouter>
    );
}
