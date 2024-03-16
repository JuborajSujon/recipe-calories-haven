import "./App.css";
import BannerContainer from "./components/Banner Container/BannerContainer";
import Navbar from "./components/Navbar/Navbar";
import SectionTitle from "./components/Section Title/SectionTitle";

function App() {
  return (
    <>
      <section className="container mx-auto px-4">
        <Navbar />
        <BannerContainer />
        <SectionTitle />
      </section>
    </>
  );
}

export default App;
