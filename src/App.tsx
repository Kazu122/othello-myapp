import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import styled from 'styled-components';

function App() {
  return (
    <DrawApp>
      <Board></Board>
    </DrawApp>
  );
}

const DrawApp = styled.div`
  text-align: center;
  margin-top: 100px;
`

export default App;
