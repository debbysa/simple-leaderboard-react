import React from "react";
import Players from "./Players";

class LeaderBoard extends React.Component {
  render() {
    const PLAYERS = [
      { id: 1, name: "Deby Silvia Agnes", score: 25 },
      { id: 2, name: "Alvian Cofi Lubis", score: 30 },
      { id: 3, name: "Syayekti Antini D", score: 40 }
    ];

    const styles = {
      container: {
        padding: 60
      }
    };
    return (
      <div style={styles.container}>
        <h1>LeaderBoard</h1>
        <Players members={PLAYERS} />
      </div>
    );
  }
}

export default LeaderBoard;
