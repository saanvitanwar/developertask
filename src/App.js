
import './App.css';
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Home from "./components/Home/Home"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <Footer />
      
    </div>
  );
}

export default App;
