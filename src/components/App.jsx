import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Game from './Game';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Game} />
        <Route component={Error404} />
      </Switch>
      <style global jsx>{`
        body {
          font: 14px "Century Gothic", Futura, sans-serif;
          margin: 20px;
          }

          ol, ul {
          padding-left: 30px;
          }

          .board-row:after {
          clear: both;
          content: "";
          display: table;
          }

          .status {
          margin-bottom: 10px;
          }

          .square {
          background: #fff;
          border: 1px solid #999;
          float: left;
          font-size: 24px;
          font-weight: bold;
          line-height: 34px;
          height: 34px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 34px;
          }

          .square:focus {
          outline: none;
          }

          .kbd-navigation .square:focus {
          background: #ddd;
          }

          .game {
          display: flex;
          flex-direction: row;
          }

          .game-info {
          margin-left: 20px;
          }


        `}</style>
    </div>
  );
}



export default App;
