import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import About from './routes/About/About';
import Blog from './routes/Blog/Blog';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <section className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </section>
  );
}

export default App;
