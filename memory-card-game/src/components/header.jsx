/* eslint-disable react/no-unescaped-entities */
import './styles/header.css'
function CreateHeader(){
    return(
        <header>
            <h1>GouGou's Memory Game</h1>
            <div className='score-container'>
                <h3>Current Score:</h3>
                <h3>Best Score:</h3>
            </div>
        </header>
    )
}

export default CreateHeader