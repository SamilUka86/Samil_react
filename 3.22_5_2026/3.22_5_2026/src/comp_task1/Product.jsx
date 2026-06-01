const Product = (Props)=>{
return(
    <div>
        {  Props.items.map((p)=>{
                return(
                    <div>
                        <img src={p.pic} alt="product" height={200} width={200}/>
                    <h1>{p.name}</h1>
                    <h1>{p.Price}</h1>
                    </div>
                )
            })
        }
    </div>
);}
export default Product;
