import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../style.css';
import Utils from '../Utils/Utils';


function Character(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [character , setCharacter] = useState({})

    useEffect(async () => {
        const answer = await Utils.getCharacterById(params.id)
        setCharacter(answer[0])
    } ,[])
   
    return (
        <div id="back">
            
            <div class="row g-0" id="white">
            <div class="col-md-4">
            <img src={character.img} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">{character.name}</h5>
            <strong>Birthday : </strong> {character.birthday} <br/>
            <strong>Occupation : </strong>{character.occupation.join(',')} <br/>
            <strong>Status : </strong>{character.status} <br/>
            <strong>Nickname : </strong>{character.nickname} <br/>
            <strong>Appearance : </strong>{character.appearance.join(',')} <br/>
            <strong>Portrayed by : </strong>{character.portrayed} <br/>
            <strong>Category : </strong>{character.category} <br/>
            <strong>Better call saul appearance : </strong>{character.better_call_saul_appearance.join(',')} <br/>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
            </div>
            
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
    );
}

export default Character;