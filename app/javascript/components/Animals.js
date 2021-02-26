import React from 'react'

const Animals = (props) =>{
    const {animals} = props
    const renderAnimals = () =>{
        return animals.map(animal => {
            return(
                <div>
                    <h1>{animal.name}</h1>
                    <h4>{animal.body}</h4>
                    <a href={`/animals/${animal.id}`}>Animal info</a>
                </div>

            )
        }
            )
    }

    return (
        <div>
    <h1>Animals</h1>
    {renderAnimals()}
    </div>
    )

}

export default Animals
