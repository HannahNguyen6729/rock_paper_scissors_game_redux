import React, { Component } from 'react'
import {connect} from 'react-redux';

class Computer extends Component {
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
            paddingTop:10
          }}
        >
            <img src={this.props.game.computer.img} alt={this.props.game.computer.id} />
        </div>
        <div className='speech-bubble '></div>
        <div>
          <img
            src="../img/playerComputer.png"
            alt="player"
            style={{ width: 200, height: 200, marginTop:10 }}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    game: state.gameReducer
  }
}
export default connect(mapStateToProps)(Computer);
