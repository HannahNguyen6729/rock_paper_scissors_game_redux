import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderOptions = () => {
    return this.props.game.map((item, index) => (
      <button
        key={index}
        className="playerThought btn"
        style={(item.flag)? { backgroundColor:'#45D994'} : {backgroundColor: "transparent"}}
        onClick={() => {
          this.props.chooseItem(item.id);
        }}
      >
        <img src={item.img} alt={item.id} />
      </button>
    ));
  };

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <div
          className="bg-light playerThought"
          style={{
            width: 150,
            height: 100,
            borderRadius: 10,
            border: "5px solid #45D994",
            paddingTop: 10,
          }}
        >
          <img
            src={this.props.game.find((item) => item.flag).img}
            alt={this.props.game.find((item) => item.flag).id}
          />
        </div>
        <div className="speech-bubble "></div>
        <div>
          <img
            src="../img/player.png"
            alt="player"
            style={{ width: 200, height: 200, marginTop: 10 }}
          />
        </div>
        <div className="d-flex">{this.renderOptions()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    game: state.gameReducer.player,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    chooseItem: (payload) => {
      let action = {
        type: "CHOOSE_ITEM",
        payload,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
