import { useState, useEffect } from "react";
import CookProgressContainer from "../Cook Progress Container/CookProgressContainer";
import RecipesCards from "../Recipes Cards/RecipesCards";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

export default function RecipesContainer() {
  const [cardData, setCardData] = useState([]);
  const [cookItems, setCookItems] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const handleAddToCook = (data) => {
    const isExist = cookItems.find((item) => item.recipe_id == data.recipe_id);

    if (!isExist) {
      setCookItems([...cookItems, data]);
    } else {
      toast.error("Item Already Added");
    }
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Toaster position="top-right" />
      <RecipesCards cardData={cardData} handleAddToCook={handleAddToCook} />
      <CookProgressContainer cookItems={cookItems} />
    </div>
  );
}
