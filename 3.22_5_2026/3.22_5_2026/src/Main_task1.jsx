import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './comp_task1/Home'
import Product from './comp_task1/Product'
import gt from "./assets/gt.png"
import zx10r from "./assets/zx10r.png"
import s1krr from "./assets/s1krr.png"
import NoPage from "./comp_task1/NoPage"

export default function Main_task1() {
    const prod=[{pic:gt,name:"GT 650",Price:'Rs.4,50,000'},{pic:zx10r,name:"ZX10r",Price:"Rs.21,00,000"},{pic:s1krr,name:"S1kRR",Price:"Rs.24,00,000"}]
    return (
        <>
            <Router>
                <div className='main-route'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product items={prod}/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
