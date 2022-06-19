import styled from "styled-components";
import Square from "./Square";

const size: number = 8;

const Board: () => JSX.Element = () => {
    //let drawBoard: JSX.Element;
    let squares: JSX.Element[] = [];

    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            //squares[i * size + j] = <span>{`${i * size + j}`}</span>;
            squares[i * size + j] = <Square key={i * size + j}></Square>;
        }
    }
    
    return (
        <>
        {Array(size).fill(null).map((v, i) => {
            return (
                <DrawBoard>
                    {squares.slice(i * size, (i + 1) * size - 1)}
                </DrawBoard>
                );
            })
        }
        </>
    );
};

const DrawBoard = styled.div`
    //display: flex;
    margin-bottom: -6.0px;
    padding: 0px;

`;

export default Board;
