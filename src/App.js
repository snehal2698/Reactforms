import logo from './logo.svg';
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Users from './Component/Users';
import Product from './Component/Product';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
       < Header />
          <Routes>
             <Route path='/registration' element={<Registration/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/users' element={<Users/>}></Route>
             <Route path='product/:id' element={<Product/>}></Route>

          </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
