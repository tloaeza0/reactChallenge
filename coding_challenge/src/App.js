import React from "react";
import "./App.css";
import BasicInfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banan: "true",
      people: [
        {
          name: "Teresa",
          number: 9802223334,
          dateOfBirth: "04-12-2003",
          gender: "female",
          active: false,
        },
        {
          name: "vane",
          number: 9802223334,
          dateOfBirth: "04-12-2003",
          gender: "female",
          active: false,
        },
        {
          name: "betty",
          number: 9802223334,
          dateOfBirth: "04-12-2003",
          gender: "female",
          active: true,
        },
      ],
    };
  }

  toggle = (num) => {
    //copy of state
    const currentState = { ...this.state };
    //pull the people
    const { people } = currentState;
    //using the parameter num we know what person went active or not active
    people[num].active = !people[num].active;
    //now that we know that we can update our state to know what happen
    this.setState(currentState);
  };

  render() {
    //destrcuture
    const { people } = this.state;

    const mappedPeople = people.map((person, index) => {
      return (
        <BasicInfo
          key={index}
          name={person.name}
          number={person.number}
          dateOfBirth={person.dateOfBirth}
          gender={person.number}
          toggleFunc={this.toggle}
          num={index}
          active={person.active}
        />
      );
    });

    return <>{mappedPeople}</>;
  }
}

export default App;
