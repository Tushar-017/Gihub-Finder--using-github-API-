import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import { GithubProvider } from './components/context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/notfound' element={<Notfound/>}/>
              <Route path='/*' element={<Notfound/>}/>
            </Routes>
          </main>

          <Footer/>
        </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
