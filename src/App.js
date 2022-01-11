import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import PersonCardClass from './components/PersonCardClass';
import PersonCardFunctional from './components/PersonCardFunctional';

const people = [
  {"firstName": "Doe", "lastName": "Jane", "age":45, "hairColor":"Black"},
  {"firstName": "Smith", "lastName": "John", "age":88, "hairColor":"Brown"},
  {"firstName": "Fillmore", "lastName": "Millard", "age":50, "hairColor":"Brown"},
  {"firstName": "Smith", "lastName": "Maria", "age":62, "hairColor":"Brown"},
]

function App() {
  return (
    <div className="container">
      {/* <PersonCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"Brown"}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={"50"} hairColor={"Brown"}/>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={"62"} hairColor={"Brown"}/> */}

      {
        people.map( person => {
          return <PersonCardFunctional firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
        })
      }

    </div>
  );
}

export default App;
