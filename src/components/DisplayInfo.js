import React from "react";
import "./css.css";
class DisplayInfo extends React.Component {

  state = {
    changeListUser : true
  }


  handClickChange = () => {
    this.setState ({
      changeListUser : !this.state.changeListUser
    })
  }


  render() {
    const { user } = this.props;
    // const user = this.props.user;
    console.log(user);
    return (
      <div>

         <div> Click here to {this.state.changeListUser ? "hide" : "display"} list user <button onClick={this.handClickChange}>Click</button></div>

      {this.state.changeListUser && <div>
        {user.map((item, index) => {
          console.log(index);

          return (
    
            <div key={item.id} className= {+item.age > 18 ? "green" : "red"}>
              <div>My name's {item.name}</div>
              <div>My age {item.age}</div>
              <hr />
            </div>
            
          );
        })}
      </div>}
      </div>
    );
  }
}

export default DisplayInfo;
