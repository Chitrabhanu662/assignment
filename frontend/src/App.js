
import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privatecomponent from './components/Privatecomponent';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>

        <Route  element={<Privatecomponent/>}>
        <Route path='/' element={<h1>congratulations you have successful Entered</h1>} />
        <Route path='/logout' element={<h1>hello</h1>} />
        </Route>

        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
  
export default App;
