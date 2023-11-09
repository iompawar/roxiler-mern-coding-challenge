import './App.css'
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import Statistics from './Pages/Statistics';
import Charts from './Pages/Charts';

function App() {
  return (
    <>
      <div className='App-comp'>
        <Header/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/statistics" element={<Statistics/>} />
          <Route path="/charts" element={<Charts/>} />
        </Routes>
        {/* <Footer/> */}
      </div>
   
    </>
  )
}

export default App
