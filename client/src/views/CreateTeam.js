import { Link,navigate } from '@reach/router'
import React, { useState } from 'react'
import Form from '../components/Form'
import axios from 'axios';
import ListPlayers from '../components/ListPlayers';

const CreateTeam = () => {
    const [player, setPlayer] = useState([]);
    const [errors, setErrors] = useState([]); 
    const createPlayer = players  => {
        axios.post('http://localhost:8000/api/Team', players )
            .then(res=>{
                setPlayer([...player, res.data]);
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })         
    }
  return (
    <div>
        <h2> <Link to={"/"}>List</Link> | <Link to={"/player/addplayer/"}>Add Player</Link></h2>

        <h4>Add Players</h4>

        <Form onSubmitProps={createPlayer} initialName="" initialPosition="" errors={errors}/>

    </div>
  )
}

export default CreateTeam;