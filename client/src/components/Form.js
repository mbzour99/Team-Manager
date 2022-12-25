import React, { useState } from 'react'
const Form = (props) => {
    const {onSubmitProps,initialName,initialPosition,errors}=props;
    const [name, setName] = useState(initialName); 
    const [position, setPosition] = useState(initialPosition); 
    const [status, setStatus] = useState({game1:0,game2:1,game3:2}); 
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProps({name,position,status});
    }
  return (
    <div>
      
        <>
        <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text"  name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Position</label><br/>
                <input type="text"  name="position" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            {/* <p>
                <input type="hidden"  name="status" value="Undecided"/>
            </p> */}
          <p> <input type="submit" value="Add"/></p> 
        </form>
        </>
    </div>
  )
}

export default Form ;