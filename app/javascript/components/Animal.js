import React from 'react'

export default (props) =>{
    const {animal, hobbies} = props
    const renderHobbies = () => {
        return hobbies.map (hobby => {
        return(
        <div>
            <h3>{hobby.name}</h3>
            <h4>{hobby.body}</h4>
            <a href={`/animals/${animal.id}/hobbies/${hobby.id}`}>View Hobby</a>
        
        </div>
    )
        })
    }

    return (
        <div>
            <h1> </h1>
            <a href='/'>Back to all animals</a>
            <h1>{animal.name}</h1>
            <h3>{animal.body}</h3>
            <h2>Hobbies:</h2>
            {renderHobbies()}
        </div>
    )
}
