/*
const h1 = document.createElement("h1")
h1.textContent = "Hello world"
h1.className = "header"
console.log(h1)
*/

//<h1 class="header">

/*
const element = <h1 className="header">This is JSX</h1>
console.log(element)
*/

ReactDOM.render(
    <h1 className="header">This is JSX</h1>, document.getElementById(`root`)
)