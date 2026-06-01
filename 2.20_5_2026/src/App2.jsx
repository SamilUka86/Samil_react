function App2() {
    var n="Hello"
    return(
        <>
                <h1>{n.toUpperCase()}</h1>
                <h1>{[1,2,3].join(',')}</h1>
                <h1>{n}</h1>
                <h1>"{n}"</h1>
                <h1>{"n"}</h1>
                <h1>"{"n"}"</h1>
                <h1>{"{n}"}</h1>
        </>
    )
}
export default App2