import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import PersonCard from './components/personCard';

const people = [
  {"firstName": "Doe", "lastName": "Jane", "age":45, "hairColor":"Black"},
  {"firstName": "Smith", "lastName": "John", "age":88, "hairColor":"Brown"},
  {"firstName": "Fillmore", "lastName": "Millard", "age":50, "hairColor":"Brown"},
  {"firstName": "Smith", "lastName": "Maria", "age":62, "hairColor":"Brown"},
]

function App() {
  return (
    <div className="container">

      {
        people.map( person => {
          return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
        })
      }
      {/* <PersonCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"Brown"}/>
      <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={"50"} hairColor={"Brown"}/>
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={"62"} hairColor={"Brown"}/> */}
    </div>
  );
}

export default App;
