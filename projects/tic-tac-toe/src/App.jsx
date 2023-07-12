import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

// children = va a mostrar si queremos una x o una "o"
//updateBoard forma de actualizar el tablero.

//el Square es cada posicion ("cuadradito")
const Square = ({ children, updateBoard, isSelected, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index)
  };
  //Se aplica renderizado condicional al que sea que le toque el turno
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  //Detectar cuando tenemos un ganador: para hacer click y actualizar el tablero
  //necesitamos otro estado para saber de quien es el turno..si de "x" o de "o"

const updateBoard=(index)=>{
  //no actualizamos esta posicion
  //si ya tiene algo
  if(board[index])return
  const newBoard=[... board]
  newBoard[index]=turn
  setBoard(newBoard)
  //para que la linea se actualice y se vea visualmente
 const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
 setTurn(newTurn)
 

}


  return (
    <main className="board">
      <h1>Ta Te Ti</h1>
      <section className="game">
        {
        board.map((_, index) => {
          return (
            <Square 
            key={index}
            index={index} 
            updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;


//min 27