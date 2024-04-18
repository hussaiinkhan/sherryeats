import Category from "./components/Category";
import Footer from "./components/Footer.js";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Menu/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
