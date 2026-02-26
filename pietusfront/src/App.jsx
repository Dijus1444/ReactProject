import './App.css'
import { card } from "./components/card";

function App() {
  const printLetter = () => {
    console.log("A");
  };
  const text1 = "lorem 123456789123456789123456789"

  return (
    <>
    <h1>Labukas</h1>
    <p>{text1}</p>
    <Card />
    <button onClick={printLetter}>Show letter A</button>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVjOVe5fRusRJ-Kgh40o9PSDFoGOCgJY3sA&s" alt="larry" />
    </>
  );
}

export default App


// npm create vite@latest pietusfront -- template react
// npm run dev