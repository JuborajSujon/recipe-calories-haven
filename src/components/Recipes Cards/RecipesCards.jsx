import RecipesCard from "../Recipes Card/RecipesCard";

export default function RecipesCards() {
  return (
    <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <RecipesCard />
      <RecipesCard />
      <RecipesCard />
    </div>
  );
}
