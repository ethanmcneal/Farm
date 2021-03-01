import React from 'react'

export default (props) => {
    const {hobby, animal} = props
    return(
        <div>
            <h1> </h1>
            <h1>{animal.name}'s hobbies</h1>
            <a href={`/animals/${animal.id}/hobbies/${hobby.id - 1}`}>Last hobby     </a>
            <a href={`/animals/${animal.id}/hobbies/${hobby.id + 1}`}>Next hobby</a>
            {/* thought having a last/next hobby button was cool but when it goes past the second hobby of the animal it doesn't change the animals name */}
            <h1>{hobby.name}</h1>
            <h2>{hobby.body}</h2>
            <p>{hobby.id}</p>
            <a href={`/animals/${animal.id}`}>Back to {animal.name}</a>
            <h1></h1>
            <a href='/'>Back to animals</a>
        </div>

    )
}