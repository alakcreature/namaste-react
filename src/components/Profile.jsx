import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
          name: "Dummy",
          location: "Dummy"
        }
      }
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/alakcreature");
    const data = await res.json()
    this.setState({
      userInfo: data
    });
  }

  render() {
    const {avatar_url, name, location} = this.state?.userInfo;
    return (
      <div>
        <h1>Profile</h1>
        <img 
            src={avatar_url}
        />
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default Profile;
