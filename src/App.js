import logo from './logo.svg';
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Users from './Component/Users';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       < Header />
          <Routes>
             <Route path='Registration' element={<Registration/>}></Route>
             <Route path='Login' element={<Login/>}></Route>
             <Route path='Users' element={<Users/>}></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
