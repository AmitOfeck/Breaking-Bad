import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../style.css';

function Actor(props) {

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
              {/* <BackSide style={{ backgroundColor: '#F5F5DC'}}> */}
              {/* <BackSide style={{backgroundImage: 'url(' + props.data.img + ')' , backgroundSize: '270px' }}> */}
              <BackSide id="backCard">

              <strong>{props.data.name}</strong><br/>
              <strong>-----------------------------</strong><br/>
                <strong>Actor Name:</strong> {props.data.portrayed} <br/>
                <strong>Nickname:</strong> {props.data.nickname} <br/>
                <strong>Birthday:</strong> {props.data.birthday} <br/>
             </BackSide>
             </Flippy>
        </div>
    );
}

export default Actor;