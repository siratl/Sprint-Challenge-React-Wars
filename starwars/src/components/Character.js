import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
        <div className='charList'>
            {props.characters.map(char => {
                return (
                    <div className='charAttributes'>
                        <h2 className='charName'>{char.name}</h2>
                        <p><b>Gender:</b> {char.gender}</p>
                        <p><b>Height:</b> {char.height}</p>
                        <p><b>Birth Year:</b> {char.birth_year}</p>
                        {/* <p>Home World: {char.homeworld}</p> */}
                        <p><b>Eye Color:</b> {char.eye_color}</p>
                        <p><b>Hair Color:</b> {char.hair_color}</p>
                        
                    </div>
                )
            })}
        </div>
    )
};

export default Character;