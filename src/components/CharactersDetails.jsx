/* eslint-disable react/prop-types */

import {useEffect} from 'react'
import './CharactersDetails.css'


const CharactersDetails = (props) => {
    const { character, onClose } = props
  
        useEffect( () => { //tiene dos argumentos; uno, es la función anónima y el otro elemento del que dependa lo que esté aquí dentro se va a activar cada vez que se renderice el componente
        }, [])

return (
    <div className="contenedor-pop-up">
        <div className='pop-up-content'> 
            <h1> Detalles personaje </h1>  
            <p> Fecha nacimiento: {character.dateOfBirth} </p>
            <p> Color de los ojos: {character.eyeColour}</p>
            <p> Casa de Hogwarts: {character.house}</p>
            <p> Color de pelo: {character.hairColour}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    
    </div>
)
       

 }

export default CharactersDetails;
