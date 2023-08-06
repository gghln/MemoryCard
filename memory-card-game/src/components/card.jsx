/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import './styles/card.css'

function CreateCard(props){
    const {
        currentScore,
        setCurrentScore
    } = props
    const [isClicked,setIsClicked] = useState(false)
    const [Pokemons,setPokemons] = useState([])
    let id;

    const handleClick = () => {
        //Increase Score on Click
        if(!(isClicked)){
            setCurrentScore(currentScore + 1)
            setIsClicked(false)
        }else{
           return
        }
        //Shuffle Array on Click
        Pokemons.sort(() => Math.random() - 0.5)
    }

    //Fetch the 10 first pokemon from the APP
    //Store them in state Array pokemons
    useEffect(() => {
        for(id=1;id<11;id++){
            const requestName = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.json())
            Promise.all([requestName])
            .then(([pokemon]) => {
                const pokeId = pokemon.id
                const pokeName = pokemon.name
                const pokeIcon = pokemon.sprites.front_default
                setPokemons(current => [...current,{pokeId,pokeName,pokeIcon}])
            })
            .catch(error => console.error(error))
        }    
    },[])

    //Render a card for each item stored in Pokemons Array. Using array.map() method
    return(   
        <>
        {Pokemons.map((pokemon,index) => {
            return(
                <div className='card' onClick={handleClick} key={index}>
                    <p>{pokemon.pokeName}</p>
                    <img src={pokemon.pokeIcon} alt={pokemon.pokeName} />
                </div>
            )
        })}
        </>       
    )
}

export default CreateCard