
function MainContent(){
    return (
        <h1>I`m learning React!</h1>
    )
}
ReactDOM.render(
    <div>
        <navbar />
        <MainContent />
    </div>,
    document.getElementById(`root`)
)