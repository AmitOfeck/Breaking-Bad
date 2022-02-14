import React, { useEffect, useState } from 'react';
import Utils from '../Utils/Utils';
import '../style.css';
import Actor from './Actor';


function Main(props) {

    const [characters , setCharacters] = useState([])
    const [conditions , setConditions] = useState({}) //change name
    const [display , setDisplay] = useState([])


    useEffect(async () => {
        const answer = await Utils.listCharacters()
        setCharacters(answer)
    } ,[])

    useEffect(() => {
        setDisplay(()=> {
            return characters.filter(shouldDisplayCharacter)
        })
    } ,[conditions , characters])

    function shouldDisplayCharacter(character){
        const displayBySeason = conditions.season ? character.appearance.includes(conditions.season) : true
        const displayByStatus = conditions.status ? character.status === conditions.status : true
        return displayBySeason && displayByStatus
    }
    

    function setSeason(season){
        if(parseInt(season) === conditions.season){
            setConditions((current)=> ({
                status : current.status
            }))
        }
        else{
            setConditions((current)=> ({
                ...current, 
                season : parseInt(season)
            }))
        }
    }

    function setStatus(status){
        if(status === conditions.status){
            setConditions((current)=> ({
                season : current.season
            }))
        }
        else{
            setConditions((current)=> ({
                ...current, 
                status : status
            }))
        }
    }

    let list = display.map((character , index) => {
        return(<Actor key={index} data={character} />)
    })


    return (
        <div id="back">
            {/* search bar */}
            <div id="bar">

                <div></div>
        
                 {/* season div */}
                <div>
                    <br/>
                    <strong id="white">Appearance in season</strong> &nbsp;&nbsp;
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" value='1' id={conditions.season === 1 ? "blue" : ""} class="btn btn-dark" onClick={(e) => setSeason(e.target.value)}>1</button>
                      <button type="button" value='2' id={conditions.season === 2 ? "blue" : ""} class="btn btn-dark" onClick={(e) => setSeason(e.target.value)}>2</button>
                      <button type="button" value='3' id={conditions.season === 3 ? "blue" : ""} class="btn btn-dark" onClick={(e) => setSeason(e.target.value)}>3</button>
                      <button type="button" value='4' id={conditions.season === 4 ? "blue" : ""} class="btn btn-dark" onClick={(e) => setSeason(e.target.value)}>4</button>
                      <button type="button" value='5' id={conditions.season === 5 ? "blue" : ""} class="btn btn-dark" onClick={(e) => setSeason(e.target.value)}>5</button>
                     </div>
                     <br/>
                </div>
               
                 {/* status div */}
                 <div>
                     <br/>
                    <strong id="white">Status</strong> &nbsp;&nbsp;
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" value="Presumed dead" id={conditions.status === "Presumed dead" ? "blue" : ""} class="btn btn-dark" onClick={(e) => setStatus(e.target.value)}>Presumed dead</button>
                      <button type="button" value="Alive" id={conditions.status === "Alive" ? "blue" : ""} class="btn btn-dark" onClick={(e) => setStatus(e.target.value)}>Alive</button>
                      <button type="button" value="Deceased" id={conditions.status === "Deceased" ? "blue" : ""} class="btn btn-dark" onClick={(e) => setStatus(e.target.value)}>Deceased</button>
                      <button type="button" value="Unknown" id={conditions.status === "Unknown" ? "blue" : ""} class="btn btn-dark" onClick={(e) => setStatus(e.target.value)}>Unknown</button>
                     </div>
                 </div> 
            </div>

            <br/>
            <div id="orderList">
                {list}
            </div>
        </div>
    );
}

export default Main;