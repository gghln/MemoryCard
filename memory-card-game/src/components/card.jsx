/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import './styles/card.css'

function CreateCard(props){
    const {
        id,
        currentScore,
        setCurrentScore
    } = props
    const [isClicked,setIsClicked] = useState(false)
    const [name,setName] = useState('')
    const [icon,setIcon] = useState('')

    const handleClick = () => {
        if(!(isClicked)){
            setCurrentScore(currentScore + 1)
            setIsClicked(false)
        }else{
           return
        }
   }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(name => setName(name.name))
        .catch(error => console.error(error));

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(icon => setIcon(icon.sprites.front_default))
        .catch(error => console.error(error));
    },[id])

    return(
        <div className="card" onClick={handleClick}>
            <pre>{name}</pre>
            {icon ? <img src={icon}/> : 'Loading...'}
        </div>
    )
}

export default CreateCard