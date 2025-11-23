//import logo from './logo.svg';
import './App.css';
import pic1 from './Assets/download (1).jpg'
import pic2 from './Assets/download (2).jpg'
import pic3 from './Assets/download (3).jpg'
import pic4 from './Assets/download (4).jpg'
import pic5 from './Assets/download (5).jpg'
import pic6 from './Assets/download (6).jpg'
import Footer from './Components/Footer';
import NavBar from './Components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Add from './Pages/Add';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        
            <div className="min-h-screen relative overflow-hidden bg-[#050505] text-white">

              {/* Animated Glow 1 */}
              <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse"></div>

              {/* Animated Glow 2 */}
              <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse animation-delay-1000"></div>

              {/* Subtle moving gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#0c0c0c] to-black opacity-60 animate-[movediag_12s_linear_infinite]"></div>

              <div className="relative z-10 p-10">
                <NavBar/>
                        <Routes>
                          <Route path = "about" element ={<About/>}/>
                          <Route path = "contact" element ={<Contact/>}/>
                          <Route path = "home" element ={<Home/>}/>
                          <Route path = 'add' element={<Add/>}/>
                        </Routes>
                <div className='Container'>
                <h1 className="text-4xl font-bold">LIU Campuses</h1>
                


                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-10">

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic1}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Rayak Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Rayak, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic2}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Tripoli Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Tripoli, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic3}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Nabateih Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Nabateih, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic4}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Bekaa Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Bekaa, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic5}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Beirut Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Beirut, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                    <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/20 transition">

                      <img 
                        src={pic6}
                        alt="not found"
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />

                      <h2 className="text-2xl font-semibold">Saida Campus</h2>
                      <p className="text-gray-300 mt-2">
                        Address : Saida, lebanon<br/>
                        Phone : +961-1-123456<br/>
                        Email : info@liu.edu.lb<br/>
                      </p>

                    </div>

                  </div>
                  </div>

 
              
              </div>

              {/* Custom animation keyframes */}
              <style>
                {`
                  @keyframes movediag {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(30px, 30px); }
                    100% { transform: translate(0, 0); }
                  }

                  .animation-delay-1000 {
                    animation-delay: 1s;
                  }
                `}
              </style>
              <Footer/>
            </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
