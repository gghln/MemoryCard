/* eslint-disable react/prop-types */
import CreateCard from "./card"
import './styles/grid.css'

function DisplayGrid (props){
    const {currentScore, setCurrentScore} = props
    
    return(
        <div className="grid-container">
            <CreateCard currentScore={currentScore} setCurrentScore={setCurrentScore}/>
        </div>
    )
}

export default DisplayGrid