// import logo from'./logo.svg';
import './App.css';
// import Router from "./Router"
// import LoginSignupform from './Project/LoginSignupform';
import Navbar from './Project/Tourism/navbar/Navbar';
import Body from './Project/Tourism/body/Body';
import About from './Project/Tourism/About/About';
import Destination from './Project/Tourism/destination/Destination';
import Search from './Project/Tourism/search/Search';
import Footer from './Project/Tourism/footer/Footer'



function App() {
  return (
    <div className="App">
      {/* <Router></Router> */}
      {/* <LoginSignupform></LoginSignupform> */}
      {/* <Home></Home> */}
      <Navbar></Navbar>
      
      <Body></Body>
      <About></About>
      <Destination></Destination>

      
      <Search></Search>
      <Footer/>
     
     </div>
  )
}

export default App;
