import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../style.css';
import Utils from '../Utils/Utils';


function Character(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [character , setCharacter] = useState({
        char_id: 0,
        name: "",
        birthday: "",
        occupation: [],
        img: "",
        status: "",
        nickname: "",
        appearance: [],
        portrayed: "",
        category: "",
        better_call_saul_appearance: []
    })

    useEffect(async () => {
        const answer = await Utils.getCharacterById(params.id)
        setCharacter(answer[0])
    } ,[])
   
    return (
        <div id="back">

            <br/>

            <div className="row g-0" id="white" id="detailsCard">
            <div></div>

            <img src={character.img} className="img-fluid rounded-start" />

            <div className="col-md-8" id="white">
            <div className="card-body">
            <h3 className="card-title">{character.name}</h3>
            <p>-------------------------------</p>
            <strong>Birthday : </strong> {character.birthday} <br/>
            <strong>Occupation : </strong>{character.occupation.join(', ')} <br/>
            <strong>Status : </strong>{character.status} <br/>
            <strong>Nickname : </strong>{character.nickname} <br/>
            <strong>Appearance : </strong>{character.appearance.join(', ')} <br/>
            <strong>Portrayed by : </strong>{character.portrayed} <br/>
            <strong>Category : </strong>{character.category} <br/>
            <strong>Better call saul appearance : </strong>{character.better_call_saul_appearance.join(', ')} <br/><br/><br/>
            <button type="button" className="btn btn-warning" onClick={() => navigate ('/')}>Back</button>
            </div>
            </div>

            <div></div>

            </div>
            
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
    );
}

export default Character;