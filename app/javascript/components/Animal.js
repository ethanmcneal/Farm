import React from 'react'

export default (props) =>{
    const {animal} = props
    const renderAnimal = () => {
        return(
        <div>
        <h1>{animal.name}</h1>
        <h3>{animal.body}</h3>
        </div>
    )}

    return (
        <div>
            <h1> </h1>
            <a href='/'>Back to all animals</a>
            {renderAnimal()}
        </div>
    )
}
