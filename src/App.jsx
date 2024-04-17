import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import UserList from './components/UserList';
import User from './components/User';
import Product from './components/Product';
import ProductLIst from './components/ProductList';
import ErrorPage from './components/Error-Page';
import Blog from './components/Blog';




const App = () => {
  return(
    <Router>
      <Navbar />
      <About />
      <Home />
      <Blogs />
      <UserList />
      <ProductLIst />
      <ErrorPage/>
      <Blog />
      <Routes>
        {/* <Route path='/about' element={<About />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/users' element={<UserList />}/> */}
        {/* <Route path='/contact' element={<Contact />}/> */}
        <Route path='/users/:userId' element={<User />}/>
        {/* <Route path='/products' element={<ProductLIst />}/> */}
        <Route path='/products/:ProductId' element={<Product />}/>
        {/* <Route path='/*' element={< ErrorPage/>}/> */}
        {/* <Route path='/blogs/:blogId' element={<Blog />}/> */}


      </Routes>
    </Router>
  )
}

export default App