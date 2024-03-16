import { useState } from "react";
import RecipesCard from "../Recipes Card/RecipesCard";
import { useEffect } from "react";

export default function RecipesCards() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cardData.map((data) => (
        <RecipesCard key={data.recipe_id} data={data} />
      ))}
    </div>
  );
}
