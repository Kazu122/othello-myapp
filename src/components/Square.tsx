import styled from "styled-components";

const Square: () => JSX.Element = () => {
    return (
        <DrawSquare>
        </DrawSquare>
        
    );
}

const DrawSquare = styled.button`
    //display: flex;
    width: 100px;
    height: 100px;
    border: 1px solid;
    background: #25890c;
    margin: 0px;
    padding: 0px;
`;

export default Square;
