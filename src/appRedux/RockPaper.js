import React, { Component } from 'react';
import Computer from './Computer';
import Player from './Player';
import Result from './Result';
import './RockPaper.css';

export default class RockPaper extends Component {
  render() {
    return (
      <div className="game container-fluid text-center text-white">
        <h1 className='my-4 display-4 text-warning'>Rock Paper Scissors Game</h1>
        <div className="row">
          <div className="col-4">
            <Player/>
          </div>
          <div className="col-4">
            <Result/>
          </div>
          <div className="col-4">
            <Computer/>
          </div>
        </div>
      </div>
    )
  }
}
