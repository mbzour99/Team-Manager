import React from 'react'
import { Link } from '@reach/router';
import ListPlayers from '../components/ListPlayers';

export const Main = () => {
  return (
    <div>
        <h2> <Link to={"/"}>List</Link> | <Link to={"/player/addplayer/"}>Add Player</Link> | <Link to={"/status/game/1"}>Status</Link></h2>
        <ListPlayers/>
    </div>
  )
}

