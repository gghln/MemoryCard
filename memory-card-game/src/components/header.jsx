/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Score from './score'
import './styles/header.css'

function CreateHeader(props){
    const {currentScore,bestScore} = props
    return(
        <header>
            <h1>GouGou's Memory Game</h1>
            <div className='score-container'>
                <Score 
                    score={currentScore} 
                    name='Current Score' 
                />
                <Score 
                    score={bestScore} 
                    name='Best Score' 
                />
            </div>
        </header>
    )
}

export default CreateHeader