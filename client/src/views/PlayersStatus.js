import { Link } from '@reach/router'
import React from 'react'
import PlayerStatus from '../components/PlayerStatus'
const PlayersStatus = (props) => {
  return (
    <div>
      <br></br>
        Player Status - Game{props.id} :
        <br></br>
        <br></br>
        <Link to ="/status/game/1">Game1</Link>  | <Link to ="/status/game/2">Game2</Link> | <Link to ="/status/game/3">Game3</Link>
        <PlayerStatus id={props.id}/>
    </div>
  )
}

export default PlayersStatus