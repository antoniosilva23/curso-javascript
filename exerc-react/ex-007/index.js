const page = (
    <div>
        <h1>My awesome website in React!</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It`s Composable</li>
            <li>It`s Declarative</li>
            <li>It`s hireable skill</li>
            <li>It`s actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById(`root`))
//document.getElementById(`root`).append(JSON.stringify(page))