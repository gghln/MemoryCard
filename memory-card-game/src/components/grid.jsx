/* eslint-disable react/prop-types */
import CreateCard from "./card"
import './styles/grid.css'

function DisplayGrid (props){
    const {currentScore, setCurrentScore} = props
    return(
        <div>
            <div className="grid-container">
                <CreateCard id={1} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={2} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={3} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={4} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={5} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={6} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={7} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={8} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={9} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
                <CreateCard id={10} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
            </div>
        </div>
    )
}

export default DisplayGrid