import { useState, useEffect } from "react";
import CookProgressContainer from "../Cook Progress Container/CookProgressContainer";
import RecipesCards from "../Recipes Cards/RecipesCards";

export default function RecipesContainer() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <RecipesCards cardData={cardData} />
      <CookProgressContainer />
    </div>
  );
}
