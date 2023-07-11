/* eslint-disable react/jsx-key */
import {useEffect, useState} from 'react'
import './CharactersDetails.css'
import Characters from "./Characters";


const HarryPotterPage = () => {

        const [characters, setCharacters] = useState([]);

        useEffect( () => { //tiene dos argumentos; uno, es la función anónima y el otro elemen
                const apiUrl ='https://hp-api.onrender.com/api/characters'
                fetch(apiUrl)
                .then(response => response.json()) 
                .then(responseData => {
                let data = responseData
                console.log(data)
                setCharacters(data)
                })
        }, [])

return (
        <> 
        { 
                characters.map(character =>
                        <div >
                                <Characters key={character.id} character={character}/>
                        </div>
        )}
    </>
)
       

 }

export default HarryPotterPage;