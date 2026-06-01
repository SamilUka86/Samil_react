function App4() {
    
    var a={backgroundColor:'cyan'}
    var b ={color:'pink'}
    var c=new Date()
    return(
        <>
            <h1 style={b,a}>HI</h1>
            <h1 style={a,b}>HI</h1>
            <p>{c.toLocaleDateString()}</p>
            <p>{c.toLocaleTimeString()}</p>
    </>
    )
}
export default App4