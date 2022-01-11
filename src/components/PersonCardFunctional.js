import React from 'react';

const PersonCardFunctional = props => {
    const birthday = () => {
        // need update for birthday function in order to update age
        // props READ ONLY cant use
        // props.age = props.age + 1
    }

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>hair Color: {props.hairColor}</p>
            <button onClick={birthday}>Click</button>
        </div>
    )
}

export default PersonCardFunctional;