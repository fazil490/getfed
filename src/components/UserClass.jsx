import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Unknown",
        location: "somewhere",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/fazil490");
    const json = await data.json();

    this.setState({
        userInfo:json
    })
  }


  render() {
      const {avatar_url, name, login, public_repos} = this.state.userInfo;
    return (
      <div className="userCard">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>UserName : {login} </h3>
        <h3>Repositories : {public_repos} </h3>
      </div>
    );
  }
}

export default UserClass;
