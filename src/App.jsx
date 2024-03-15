import "./App.css";
import BannerContainer from "./components/Banner Container/BannerContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <section className="container mx-auto px-4">
        <Navbar />
        <BannerContainer />
      </section>
    </>
  );
}

export default App;
