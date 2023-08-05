/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
function CreateCard(props){
    const {id} = props
   const [name,setName] = useState('')
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(json => setName(json.name))
        .catch(error => console.error(error));
    },[])

    return(
        <div>
            {name ? <pre>{JSON.stringify(name, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default CreateCard