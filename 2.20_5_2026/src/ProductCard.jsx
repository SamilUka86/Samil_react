import ProductList from "./ProductList.jsx"
import s1krr from './assets/s1krr.png'
import gt from './assets/gt.png'
import zx10r from './assets/zx10r.png'

export default function ProductCard() {
    const prod=[{pic:gt,name:"GT 650",Price:'Rs.4,50,000'},{pic:zx10r,name:"ZX10r",Price:"Rs.21,00,000"},{pic:s1krr,name:"S1kRR",Price:"Rs.24,00,000"}]
  return (
   <>
    <ProductList info={prod}/>
   </>
  )
}
