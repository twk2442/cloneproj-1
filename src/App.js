import "./App.css";
import { Component } from "react";
import React, { useState } from "react";

function App() {
  return (
    <div className="container">
      <h1>hello world</h1>
      <Func initNumber={2}></Func>
      <ClassCom initNumber={2}></ClassCom>
    </div>
  );
}

var funcStyle = "color:blue";
var funcId = 0;
function Func(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState(new Date().toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];
  // 위아래 동일 코드

  var [_date, setDate] = useState(new Date().toString()); // useState(초기값); 괄호안에
  // 내용은 _data초기값 설정

  console.log("%cfunc => render" + ++funcId, funcStyle); // ++ 은 실행될때마다 1씩증가 d
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number} </p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function (e) {
          e.preventDefault();
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={function (e) {
          e.preventDefault();
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

class ClassCom extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function (e) {
            e.preventDefault();
            this.setState({ number: Math.random() });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="date"
          onClick={function (e) {
            e.preventDefault();
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
