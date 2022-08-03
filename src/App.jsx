import './App.css'
import { Login } from './components/Login'
import { Register } from './components/Register/Register'
import { Route, Routes } from "react-router-dom"
import { Home } from './components/Home'
import { Navbar } from './components/Navbar/Navbar'
import { AddProduct } from './components/Products/AddProduct'
import { ProductList } from './components/Products/ProductList'
import { UpdateProduct } from './components/Products/UpdateProduct'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/products' element={<ProductList />} ></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
        <Route path='/products/:id' element={<UpdateProduct />} ></Route>
      </Routes>
    </div>
  )
}

export default App
