import React from "react";
import { Outlet } from "react-router-dom";

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