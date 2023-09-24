import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

// class AddUserInfo extends React.Component {

//   state = {
//     name: "",
//     age: "",
//     address: "29 Nguyen Khac Can",
//   };

//   handClick = (event) => {
//     console.log("Click ne", this.state.name);

//     this.setState({
//       name: "HarryPoteric",
//       age: Math.floor(Math.random() * 100 + 1), 
//     });
//   };

//   handMouse(event) {
//     console.log(event);
//   }

//   handOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     // console.log(event, event.target.value);
//   };

//   handOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//     // console.log(event, event.target.value);
//   };

//   handOnSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.state);

//     this.props.handleNewUser({
//       id: Math.floor((Math.random() * 100)+ 1) + "random",
//       name: this.state.name,
//       age : this.state.age,
//     })
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and my age {this.state.age}
//         <form onSubmit={(event) => this.handOnSubmit(event)}>
//           <label>Your name : </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handOnChangeInput(event)}
//           />

//           <label>Your age : </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handOnChangeAge(event)}
//           />

//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('Hoi dan IT')
  const [age, setAge] = useState('')


  // state = {
  //   name: "",
  //   age: "",
  //   address: "29 Nguyen Khac Can",
  // };

 const handClick = (event) => {
    console.log("Click ne", this.state.name);

    this.setState({
      name: "HarryPoteric",
      age: Math.floor(Math.random() * 100 + 1), 
    });
  };

 const handMouse = (event) => {
    console.log(event);
  }

  const handOnChangeInput = (event) => {
    // this.setState({
    //   name: event.target.value,
    // });
    setName(event.target.value)
    // console.log(event, event.target.value);
  };

  const handOnChangeAge = (event) => {
    // this.setState({
    //   age: event.target.value,
    // });
    setAge(event.target.value)
    // console.log(event, event.target.value);
  };

 const handOnSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);

    props.handleNewUser({
      id: Math.floor((Math.random() * 100)+ 1) + "random",
      name: name,
      age : age,
    })
  };

    return (
      <div>
        My name is {name} and my age {age}
        <form onSubmit={(event) => handOnSubmit(event)}>
          <label>Your name : </label>
          <input
            value={name}
            type="text"
            onChange={(event) => handOnChangeInput(event)}
          />

          <label>Your age : </label>
          <input
            value={age}
            type="text"
            onChange={(event) => handOnChangeAge(event)}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  
}

export default AddUserInfo;
