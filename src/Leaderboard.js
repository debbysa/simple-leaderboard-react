import React from "react";
import Players from "./Players";
import AddPlayer from "./AddPlayer";

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    const PLAYERS = [
      { id: 1, name: "Deby Silvia Agnes", score: 25 },
      { id: 2, name: "Alvian Cofi Lubis", score: 30 },
      { id: 3, name: "Syayekti Antini D", score: 40 }
    ];
    this.state = {
      members: PLAYERS
    };
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
  }

  onPlayerAdd(name) {
    let new_members = this.state.members;
    new_members.push({ id: new_members.length + 1, name: name, score: 10 });
    this.setState({
      members: new_members
    });
  }
  render() {
    const styles = {
      container: {
        padding: 60
      }
    };
    return (
      <div style={styles.container}>
        <h1>LeaderBoard</h1>
        <Players members={this.state.members} />
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

export default LeaderBoard;
