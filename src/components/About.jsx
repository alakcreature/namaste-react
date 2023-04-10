import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

// function About() {
//   return (
//     <div>
//       About
//       {<Outlet />}
//     </div>
//   );
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy"
      }
    }
  }

  render() {
    return (
      <>
        <div>
          About
          <UserContext.Consumer>
            {({user})=><h4 className="font-bold text-lg text-red-500 p-10">{user.name} - {user.email}</h4>}
          </UserContext.Consumer>
          {<Outlet />}
        </div>
      </>
    );
  }
}

export default About;


// Parent Constructor

// Parent render
//     First Child constructor
//     First Child render
//     Second Child constructor
//     Second Child render

//     DOM UPDATED for children

//     first Child componentDidMount
//     second Child componentDidMount

// Parent componentDidMount