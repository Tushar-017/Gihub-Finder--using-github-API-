import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider} from './components/context/alert/AlertContext'

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Alert from './components/layout/Alert';
import User from './pages/User';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar/>

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/user/:login' element={<User/>}/>
                <Route path='/notfound' element={<Notfound/>}/>
                <Route path='/*' element={<Notfound/>}/>
              </Routes>
            </main>

            <Footer/>
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
