import './styles/popup.css'
function PopUp (props) {
    const {msg} = props
    return(
        <div className="popup">
            <div className='popup-container'>
            <span className='popup-msg'>{msg}</span>
            </div>
        </div> 
    )
}

export default PopUp