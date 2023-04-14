import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/Home'
import Mobile from './components/Mobile'
import Tv from './components/Tv'
import Laptop from './components/Laptop'
import './index.scss'
import { Provider } from 'react-redux';
import store from './store/store'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Whishlist from './components/Whishlist';
import Login from './authintication/Login';
import Signup from './authintication/Signup';

const App = () => {
  return (
    <div className='container'>

    

<BrowserRouter>
   <Provider store={store}>
        <Cart/>
        <Whishlist/>
        <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/login' element={<Login/> } />
        <Route path='/sighup' element={<Signup />} />
        
    </Routes>
   </Provider>
        <Footer/>
</BrowserRouter>

    </div>
  )
}

export default App;
