import "./App.css";
import BannerContainer from "./components/Banner Container/BannerContainer";
import Navbar from "./components/Navbar/Navbar";
import RecipesContainer from "./components/Recipes Container/RecipesContainer";
import SectionTitle from "./components/Section Title/SectionTitle";

function App() {
  return (
    <>
      <section className="container mx-auto px-4 pb-16 bg-white">
        <Navbar />
        <BannerContainer />
        <SectionTitle />
        <RecipesContainer />
      </section>
    </>
  );
}

export default App;
