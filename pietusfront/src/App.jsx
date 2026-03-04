import './App.css'
import { Card } from "./components/Card";
import { Comp2 } from './components/Comp2';

function App() {
  const printLetter = () => {
    console.log("A");
  };
  const text1 = "Text123456"

  const handlePrintText = () => {
    console.log("eventas ivykes korteleje, bet kvieciamas")
  };

  return (
    <>
    <h1>Labukas</h1>
    <p style={{ color: "red", backgroundColor: "black", padding:"20px"}}>{text1}</p>
    <Card 
    text="Laba diena" 
    text2= "viso gero"
    handlePrintText={handlePrintText}
    color="#00ff00"
    />
    <Comp2
    text="texttext"
    color="#faeb16"
    />
    <Comp2
    text="NewText"
    color="#fa6400"
    />
    <button onClick={printLetter}>Show letter A</button>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVjOVe5fRusRJ-Kgh40o9PSDFoGOCgJY3sA&s" alt="larry" />
    </>

  );
}

export default App


// npm create vite@latest pietusfront -- template react
// npm run dev