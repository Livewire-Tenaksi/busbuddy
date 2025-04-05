import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Navbar from './components/Navbar'
import "./App.css"
import Navmobile from './components/Navmobile'
import Bookticketpage from './pages/Bookticketpage'
import { Authstore } from './statemanager/auth.store'
import Contactpage from './pages/Contactpage'
import Singlebuspage from './pages/Singlebuspage'
import Footer from './components/footer/Footer'
import Aboutpage from './pages/Aboutpage'
import Supportpage from './pages/Supportpage'
import Termsandcondition from './pages/Termsandcondition'
import Faqpage from './pages/Faqpage'
import Addbus from './components/addbus/Addbus'


function App() {


  let { message, checkAuth } = Authstore(); // Make sure checkAuth is available
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      if (checkAuth) {
          checkAuth()
              .then(() => setLoading(false))
              .catch(() => setLoading(false));
      } else {
          console.error("checkAuth function is missing!");
          setLoading(false);
      }
  }, []);

  if (loading) {
      return <div className='container1 ' >
        <div className=' loader'></div>
        </div>
  }

    


  return (
    <>

    <BrowserRouter>

    <div className="app-container">
  <div id='Dnav'>
<Navbar />
</div>




<div id='Navm'>
  <Navmobile />
</div>
    
<div className="content">
    <Routes >

      <Route path='/' element={<Homepage />}>Home</Route>
      <Route path='/addbus' element={<Addbus/>}>Addbus</Route>
      <Route path={'/signup'} element={<Signuppage />}>Signup</Route>
      <Route path='/login' element={ <Loginpage />}>Login</Route>
      <Route path='/about' element={ <Aboutpage /> }>About Us</Route>
      <Route path='/support' element={ <Supportpage /> }>Contact</Route>
      <Route path='/terms' element={ <Termsandcondition /> }>Terms and Condition</Route>
      <Route path='/faq' element={ <Faqpage /> }>FAQ</Route>
      <Route path='/bookticket' element={message.status ? <Bookticketpage /> : <Loginpage />} />
      <Route path='/singlebus/:id' element={ <Singlebuspage />}>SingleBus</Route>

    </Routes>

    </div>

    <Footer />

    </div>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
