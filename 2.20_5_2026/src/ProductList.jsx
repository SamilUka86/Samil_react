export default function ProductList(props) {
  return (
    <div className="product-container">
        {props.info.map((pr, index)=>{
            return (
                <div className="product-card" key={index}>
                    <div className="image-wrapper">
                        <img src={pr.pic} alt={pr.name}/>
                    </div>
                    <div className="product-info">
                        <h2 className="product-name">{pr.name}</h2>
                        <h3 className="product-price">{pr.Price}</h3>
                        <button className="buy-btn">Buy Now</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
