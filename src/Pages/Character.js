import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../style.css';
import Utils from '../Utils/Utils';


function Character(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [character , setCharacter] = useState({})

    useEffect(async () => {
        // console.log("hi")
        const answer = await Utils.getCharacterById(params.id)
        // console.log(answer[0])
        setCharacter(answer[0])
    } ,[])

    // let occupation = character.occupation.join(',')
    // let appearance = character.appearance.join(',')
    // let betterCallSaul = character.better_call_saul_appearance.join(',')
   
    return (
        <div id="back">

            <button type="button" className="btn btn-warning" onClick={() => navigate ('/')}>Back</button>
            <br/>

            <div className="row g-0" id="white" id="detailsCard">
            <div></div>

            {/* <div className="col-md-4"> */}
            <img src={character.img} className="img-fluid rounded-start" />
            {/* </div> */}

            <div className="col-md-8" id="white">
            <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <strong>Birthday : </strong> {character.birthday} <br/>
            {/* <strong>Occupation : </strong>{occupation} <br/> */}
            <strong>Status : </strong>{character.status} <br/>
            <strong>Nickname : </strong>{character.nickname} <br/>
            {/* <strong>Appearance : </strong>{appearance} <br/> */}
            <strong>Portrayed by : </strong>{character.portrayed} <br/>
            <strong>Category : </strong>{character.category} <br/>
            {/* <strong>Better call saul appearance : </strong>{betterCallSaul} <br/> */}
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>

            <div id="white">v</div>

            </div>
            
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        </div>
    );
}

export default Character;