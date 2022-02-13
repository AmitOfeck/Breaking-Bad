import React from 'react';
import '../style.css';



function Character(props) {

    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={props.data.img} />
              <h5 className='card-text'>{props.data.name}</h5>
              </div>
              <div className='card-back'>
              <h1>{props.data.name}</h1>
              <ul>
              <li>
                <strong>Actor Name:</strong> {props.data.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {props.data.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {props.data.birthday}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Character;