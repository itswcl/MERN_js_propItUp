import React, { Component } from 'react';

class PersonCardClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    birthday = e => {
        // setState to update age with new age by this.state.age + 1
        this.setState({age: parseInt(this.state.age) + 1})
    }


    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (

            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Birthday Button for {firstName}</button>
            </div>

        )
    }
}

export default PersonCardClass;