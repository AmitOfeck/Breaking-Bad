import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useNavigate , useParams } from 'react-router-dom'
import '../style.css';

function Actor(props) {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div>
              <Flippy
              id="flipCard"
              flipOnHover={true} 
              flipOnClick={false} 
              flipDirection="horizontal" // horizontal or vertical
              >
              <FrontSide>
              <img src={props.data.img} id="flipCard"/>
              </FrontSide>
              <BackSide id="backCard">

              <strong>{props.data.name}</strong><br/>
              <strong>-----------------------------</strong><br/>
                <strong>Actor Name:</strong> {props.data.portrayed} <br/>
                <strong>Nickname:</strong> {props.data.nickname} <br/>
                <strong>Birthday:</strong> {props.data.birthday} <br/>
                <br/><br/><br/><br/><br/><br/>
                <button type="button" class="btn btn-primary btn-sm" onClick={() => navigate ('/'+props.data.char_id)}>More info</button>
             </BackSide>
             </Flippy>
        </div>
    );
}

export default Actor;