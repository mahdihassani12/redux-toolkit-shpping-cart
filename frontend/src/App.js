import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/Cart' element={<Cart></Cart>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
