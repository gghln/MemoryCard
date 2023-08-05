import CreateCard from "./card"
import './styles/grid.css'

function DisplayGrid (){
    return(
        <div>
            <div className="grid-container">
                <CreateCard id={1}/>
                <CreateCard id={2}/>
                <CreateCard id={3}/>
                <CreateCard id={4}/>
                <CreateCard id={5}/>
                <CreateCard id={6}/>
                <CreateCard id={7}/>
                <CreateCard id={8}/>
                <CreateCard id={9}/>
                <CreateCard id={10}/>
            </div>
        </div>
    )
}

export default DisplayGrid