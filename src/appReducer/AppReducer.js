const stateDefault = {
  result: "drew 0-0",
  win: 0,
  rounds: 0,
  player: [
    { id: "rock", img: `../img/rock.png`, flag: false },
    { id: "paper", img: `../img/paper.png`, flag: true },
    { id: "scissors", img: `../img/scissors.png`, flag: false },
  ],
  computer: { id: "rock", img: "../img/rock.png" },
};

const appReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHOOSE_ITEM": {
      //reset array state.player
      let newArray = [...state.player];
      newArray = newArray.map((item, index) => {
        if (item.id === action.payload) {
          return { ...item, flag: true };
        }
        return { ...item, flag: false };
      });
      state.player = newArray;
      return { ...state };
    }
    case "PLAY_GAME": {
      state.rounds += 1;
      let randomIndex = Math.floor(Math.random() * 3);
      state.computer = state.player[randomIndex];
      //find item has property flag = true
      let item = state.player.find((item) => item.flag);
      if (item.id === state.computer.id) {
        state.result = "drew 0-0";
      } else if (
        (item.id === "rock" && state.computer.id === "scissors") ||
        (item.id === "paper" && state.computer.id === "rock") ||
        (item.id === "scissors" && state.computer.id === "paper")
      ) {
        state.result = "win";
        state.win += 1;
      } else {
        state.result = "lose";
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default appReducer;
