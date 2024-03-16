import CookProgressContainer from "../Cook Progress Container/CookProgressContainer";
import RecipesCards from "../Recipes Cards/RecipesCards";

export default function RecipesContainer() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <RecipesCards />
      <CookProgressContainer />
    </div>
  );
}
