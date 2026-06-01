import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NoPage from "./components/NoPage"
export default function MainR() {
    
    return (
        <>
        
            <Router>
                <div className='main-route'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Router>
        </>
    )
}