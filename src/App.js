// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home/Home';
import { Cart } from './Pages/Cart/Cart';
import { Kids } from './Components/Kids/Kids';
import { Women } from './Components/Women/Women';
import { About } from './Components/About/About';
import { Contactus } from './Components/Contactus/Contactus';
import { AllProduct } from './Pages/AllProduct/AllProduct';
function App() {

const [cart, setCart]=([])
const AddToCart = (product)=>{
  setCart([...cart, product])
  console.log(cart)
}

  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cart" element={<Cart cart={cart}/>} />
      <Route path="/Kids" element={<Kids/>} />
      <Route path="/Women" element={<Women/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contactus" element={<Contactus/>} />
      <Route path="/AllProduct" element={<AllProduct AddToCart={AddToCart}/>} />
    
    
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
