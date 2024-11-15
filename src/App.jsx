import Home from "./pages/Home.jsx";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Work from "./pages/Work.jsx";
import About_Us from "./pages/About_Us.jsx";
import Contact from "./pages/Contact.jsx";
import PreLoader from "./components/PreLoader.jsx";

const App = () => {
    return (
        <main className="mx-auto">
            <div className="preloader-container">
                <PreLoader />
            </div>
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
    );
};

export default App;