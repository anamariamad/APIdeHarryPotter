/* eslint-disable react/prop-types */
//react arrow component exports
//rafce
import { useState } from "react";
import CharactersDetails from "./CharactersDetails";
import "./Characters.css";
const Characters = (props) => {
  //Estado = almacén de datos
  const { character } = props;
  const [isOpenDetailsPopUP, setIsOpenDetailsPopUP] = useState(false);

  const openDetailsPopUp = () => {
    setIsOpenDetailsPopUP(true);
  };

  const closeDetailsPopUp = () => {
    setIsOpenDetailsPopUP(false);
  };

  return (
    <>
      <div className="contenedor">
        <div className="card" key={character.id}>
          <img className="imagen" src={character.image} alt="personaje" />
          <p>
            Nombre en la pelicula: <strong> {character.name}</strong>{" "}
          </p>
          <p>
            Nombre artista: <strong> {character.actor} </strong>{" "}
          </p>
          <p>
            Genero: <strong> {character.gender} </strong>
          </p>
          <p>
            Especie: <strong> {character.species} </strong>{" "}
          </p>
          <br />
          <button onClick={openDetailsPopUp} className="button-card-style">
            {" "}
            Ver mas detalles{" "}
          </button>
        </div>
        {isOpenDetailsPopUP === true && (
          <div className="modal-characters">
            <CharactersDetails
              character={character}
              key={character.id}
              onClose={closeDetailsPopUp}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
