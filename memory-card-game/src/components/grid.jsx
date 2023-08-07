/* eslint-disable react/prop-types */
import CreateCard from "./card"
import './styles/grid.css'

function DisplayGrid (props){
    const {
        currentScore, 
        setCurrentScore,
        bestScore,
        setBestScore,
        isClicked,
        setIsClicked
    } = props
    
    return(
        <div className="grid-container">
            <CreateCard 
                currentScore={currentScore} 
                setCurrentScore={setCurrentScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
            />
        </div>
    )
}

export default DisplayGrid