const File = [Nav(), TemporaryName(), Page()]

function Nav() {

    return(

        <div>

            <header>

                <nav>

                  <img src="https://e7.pngegg.com/pngimages/452/495/png-clipart-react-javascript-angularjs-ionic-github-text-logo-thumbnail.png" alt="imagem react" width="70px"/>
            
                </nav>

            </header>

            <h1>Reasons I`m excited to learn React</h1>

            <ol>
                <li>
                    Its a popular library, so I`ll be able to fit in with a job.
                </li>

                <li>
                    I`m more likely to get a job as a developer if I know React.
                </li>

            </ol>

            <footer>
                <small>Copyright. All rights reserved.</small>
            </footer>



        </div>
    )

}

function TemporaryName() { 

    return(

        <div>


            <h1>Fun facts about React</h1>

            <ul>
                <li>Was first released in 2013. </li>
                <li>Was originally created by Jordan Walke.</li>
                <li>Has well over 100k stars on Github.</li>
                <li>Is maintained by Facebook.</li>
                <li>Powers thousands of enterprises apps, including mobile apps.</li>

            </ul>


        </div>
    )

}

function Page() {

    return(
        <div>
            <h2>Reason to like React</h2>

            <ol>
                <li>
                    Its a popular library, so I`ll be able to fit in with a job.
                </li>

                <li>
                    I`m more likely to get a job as a developer if I know React.
                </li>

            </ol>

        </div>
    )
}

ReactDOM.render(File, document.getElementById(`root`))