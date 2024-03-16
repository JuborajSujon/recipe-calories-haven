import { useState } from "react";
import CurrentCooking from "./Current Cooking/CurrentCooking";
import WantToCook from "./Want To Cook/WantToCook";
import PropTypes from "prop-types";

export default function CookProgressContainer({ cookItems, handleRemoveItem }) {
  const [currentCookItems, setCurrentCookItems] = useState([]);

  const handleCurrentCooking = (data) => {
    const isExist = currentCookItems.find(
      (item) => item.recipe_id == data.recipe_id
    );

    if (!isExist) {
      setCurrentCookItems([...currentCookItems, data]);
    }
  };
  return (
    <div className="lg:w-2/5">
      <div className="flex flex-col gap-8 px-6 py-10 border border-slate-300 rounded-2xl bg-white shadow-xl ">
        <WantToCook
          cookItems={cookItems}
          handleCurrentCooking={handleCurrentCooking}
          handleRemoveItem={handleRemoveItem}
        />
        <CurrentCooking currentCookItems={currentCookItems} />
      </div>
    </div>
  );
}

CookProgressContainer.propTypes = {
  cookItems: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
