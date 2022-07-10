
const content = [maincontent(), experimental(), another()]



function maincontent() {
    return(
        <div>
            <hi>I`m Learning React!</hi>
            <p>ghghghjhggtgffgggghdgfhjdhfgdhdfghfdghdfghdfghfgddgfhgfdhgfhgfhdgfdhgdhghdgdhgdhgdhgfdhgdhhhdsdhjhsdghgdghfgdgdhgdgdgfhdghfghdghdghdghdfghfghfghfghgfhgdhgdhgfhgdhghgdhgfhgdhgfdhgdfhgfhgfhdfgdhfgdhgdfhgfdhdgfhdfghfdgdhfgdhghdg</p>
        </div>
        
      

    )

}

function experimental() {
    return(
        <div>
            <hi>I`m Learning React!</hi>
            <p>ghghghjhggtgffgggghdgfhjdhfgdhdfghfdghdfghdfghfgddgfhgfdhgfhgfhdgfdhgdhghdgdhgdhgdhgfdhgdhhhdsdhjhsdghgdghfgdgdhgdgdgfhdghfghdghdghdghdfghfghfghfghgfhgdhgdhgfhgdhghgdhgfhgdhgfdhgdfhgfhgfhdfgdhfgdhgdfhgfdhdgfhdfghfdgdhfgdhghdg</p>
        </div>
        
      

    )
}

function another() {
    return(
        <div>
            <hi>I`m Learning React!</hi>
            <p>ghghghjhggtgffgggghdgfhjdhfgdhdfghfdghdfghdfghfgddgfhgfdhgfhgfhdgfdhgdhghdgdhgdhgdhgfdhgdhhhdsdhjhsdghgdghfgdgdhgdgdgfhdghfghdghdghdghdfghfghfghfghgfhgdhgdhgfhgdhghgdhgfhgdhgfdhgdfhgfhgfhdfgdhfgdhgdfhgfdhdgfhdfghfdgdhfgdhghdg</p>
        </div>
        
      

    )
}


ReactDOM.render(content, document.getElementById(`root`))
