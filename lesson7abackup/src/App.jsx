import './App.css'
import { useEffect } from "react";

function App() {

  function handleClick() {
    alert('New option selected (' + document.getElementById('currencySelect').value + ')');
  }

  useEffect(() => {
    console.log('Making API Request');
  }, []);

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onChange={handleClick}>
        <option value="USD">USD</option>
        <option value="JPY">JPY</option>
        <option value="SGD">SGD</option>
        <option value="MYR">MYR</option>
      </select>
    </>
  )
}

export default App;
