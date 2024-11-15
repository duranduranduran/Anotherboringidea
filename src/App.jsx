
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route,  Routes} from "react-router-dom";
import Work from "./pages/Work.jsx";
import About_Us from "./pages/About_Us.jsx";
import Contact from "./pages/Contact.jsx";
// import Preloader from './components/Preloader'
// import {useEffect, useState} from "react";


const App = () => {
    // const [loaded, setLoaded] = useState(false)
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoaded(true)
    //     }, 1000) // adjust the timeout to your liking
    //
    //     return () => clearTimeout(timer)
    // }, [])
    //
    // if (!loaded) {
    //     return <Preloader />
    // }

    return (
        <main className="  mx-auto">
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
