import logo from '../logo.svg';
import '../App.css';
import CompShowUsuarios from '../usuarios/showUsuarios';
import Login from '../pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header> 
      <BrowserRouter>    
      <Routes>       
        <Route path='/' element={<Login/>}/>       
        <Route path='/usuarios' element={<CompShowUsuarios/>}/> 
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
