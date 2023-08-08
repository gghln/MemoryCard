/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import './styles/card.css'
import PopUp from "./popup"

function CreateCard(props){
    const {
        currentScore, 
        setCurrentScore,
        bestScore,
        setBestScore,
        isClicked,
        setIsClicked
    } = props
    const [Pokemons,setPokemons] = useState([])
    const [storedID,setStoredID] = useState([])
    const [popUp,setPopUp] = useState(false)
    const [popUpMsg,setPopUpMsg] = useState('')
    let id;

    const shuffleCards = () => {
        //Shuffle Array on Click
        Pokemons.sort(() => Math.random() - 0.5)
    }

    //Increase Score on Click
    const increaseScore = () => {
        if(!(isClicked)){
            setCurrentScore(currentScore + 1)
        }else{
            return
        }
    }
    
    //Increase Best Score
    const findBestScore = () => {
        if(bestScore <= currentScore){
            setBestScore(currentScore + 1)
        }else{
            setBestScore(bestScore)
        }
    }
    
    // Game Logic
    const gameLogic = (id) => {
        if(!(storedID.includes(id))){
            if(currentScore == '9'){
                setPopUp(true)
                setPopUpMsg('YOU WON!!!')
                setStoredID([])
                window.location.reload()
            }else{
                setStoredID([...storedID,id])
                increaseScore()
                findBestScore()
                shuffleCards()
                console.log(currentScore)
            }
        }
        else{
            setPopUp(true)
            setPopUpMsg('YOU LOST!!!')
            setStoredID([])
            setCurrentScore(0)
            shuffleCards()
            setBestScore(bestScore)
        }
    }

    //On click handler
    const handleClick = (id) => {
        gameLogic(id)
    }

    //Fetch the 10 first pokemon from the APP
    //Store them in state Array pokemons
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {popUp && <PopUp msg={popUpMsg}/>}
        {Pokemons.map((pokemon,index) => {
            return(
                <>
                    <div className='card-front' onClick={()=>handleClick(pokemon.pokeId)} key={index}>
                        <p className="pokemon-name">{pokemon.pokeName}</p>
                        <img className="pokemon-image" src={pokemon.pokeIcon} alt={pokemon.pokeName} />
                    </div>
                </>           
            )
        })}
        </>       
    )
}

export default CreateCard