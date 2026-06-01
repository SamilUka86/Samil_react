export default function Events() {
    const ocl=()=>{
        document.getElementById('b').innerHTML="Clicked one Time"
    }
    const och=(event)=>{
        document.getElementById('a').innerHTML=event.target.value
    }
    const odc=()=>{
        document.getElementById('b').innerHTML="Clicked two times"
    }
    const os=(e)=>{  
        e.PreventDefault()
        alert(document.getElementById('c').value)
    }
    return (
    <>
        <form onSubmit={os}>
            <input type="text" id="c" onChange={och}/>
            <input type="submit"/>
        </form>
        <h1 id="a">Event Demo-1</h1>
        <button onClick={ocl} onDoubleClick={odc}>Click/Doubleclick</button>
        <h1 id="b">Click/DoubleClick Demo</h1>
    </>
    )
}
