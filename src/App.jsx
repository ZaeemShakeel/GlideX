import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div class="bg-[#1B1B1B]">
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
