import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';

const Home = (props) => {
  return (
    <div>
      <h1 style = {{color: "red"}}>Welcome</h1>
    </div>
  );
}

const Word = (props) => {
  const {word} = useParams()
  return (
    <div>
      <h1 style = {{color: "red"}}>The word you entered is: {word}</h1>
    </div>
  );
}

const Number = (props) => {
  const {num} = useParams()
  return (
    <div>
      <h1 style = {{color: "red"}}>The number you entered is: {num}</h1>
    </div>
  );
}

const HelloColor = (props) => {
  const {word,color,bg} = useParams()
  return (
    <div>
      <h1 style = {{color: color}}>{word}</h1>
    </div>
  );
}


const HelloColorBg = (props) => {
  const {word,color,bg} = useParams()
  return (
    <div>
      <h1 style = {{color: color, backgroundColor: bg}}>{word}</h1>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Practice</h1>
        <Link to={'/home'}>Home</Link>
        <br />
        <Routes>
          <Route path = "/Home" element = {<Home />}/> 
          <Route path = "/:word" element = {<Word />}/>
          <Route path = "/:num" element = {<Number />}/>
          <Route path = "/:word/:color/" element = {<HelloColor/>}/>
          <Route path = "/:word/:color/:bg" element = {<HelloColorBg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
