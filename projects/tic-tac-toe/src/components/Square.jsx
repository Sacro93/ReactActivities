
export const Square = ({ children, updateBoard, isSelected, index }) => {
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

  // children = va a mostrar si queremos una x o una "o"
//updateBoard forma de actualizar el tablero.
//el Square es cada posicion ("cuadradito")
