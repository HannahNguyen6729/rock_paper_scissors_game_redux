import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
        <h1 className="text-danger">You {this.props.game.result} !</h1>
        <h1 className="text-success">Win: {this.props.game.win} </h1>
        <h1 className="text-primary">
          Total rounds: {this.props.game.rounds}
        </h1>
        <button
          className="btn btn-success my-3"
          style={{ fontSize: 25 }}
          onClick={() => {this.props.playGame()}}
        >
          Play game
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    game: state.gameReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
