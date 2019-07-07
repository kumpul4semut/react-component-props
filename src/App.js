import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// component header
function Header(){
  return (<header className="App-header">
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Precing</a>
        <a href="#">About</a>
        </header>);
}

//say hellofunction

// function Say(props){
//     return <span>{props.say}</span>
// }

function Managesay(props){
  return <span> mengucapkan {props.say}</span>
}

// component body
function Body(props){
  return <h1>  <Managesay say={props.say} /> oleh {props.name}</h1>
}



class App extends Component{
  render(){
    return(
      <div className="App">
        
       <Header />
        
        <body className="body">
        <p>
          <Body say="hallo" name="Kumpul4semut" />
        </p>
        </body>

        <footer>
        &copy; 2019 Kumpul4semut Learn React
        </footer>

      </div>
      );
    }
}

export default App;
