
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Work from "./pages/Work.jsx";
import About_Us from "./pages/About_Us.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
    return (
        <main className=" max-w-7xl mx-auto">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/work" element={<Work  />} />
                    <Route path="/about" element={<About_Us  />} />
                    <Route path="/contact" element={<Contact  />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
