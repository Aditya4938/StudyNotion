import './App.css';
import {Link, Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import Contact from './component/Contact';
import logo from './assets/Logo.svg'
function App() {
  return (
    <div className="App">
      <nav className='flex justify-between bg-black text-white mt-4 items-center w-[70%] m-auto'>
        <div>
        <Link to="/"><img src={logo} alt="" className='h-8'/></Link>
        </div>
        <div className='flex gap-4'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/login"> <button className=' mr-2 bg-[#161D29] p-[10px] rounded-lg'>Login</button> </Link>
          <Link to="/signup"> <button className=' mr-2 bg-[#161D29] p-[10px] rounded-lg'>Sign Up</button> </Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        
      </Routes>

    </div>
  );
}

export default App;
