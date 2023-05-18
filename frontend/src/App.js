import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/Cart' element={<Cart></Cart>} ></Route>
          <Route path='*' element={<NotFound></NotFound>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
