import PropTypes from "prop-types";
import RecipesCard from "../Recipes Card/RecipesCard";

export default function RecipesCards({ cardData, handleAddToCook }) {
  return (
    <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cardData.map((data) => (
        <RecipesCard
          key={data.recipe_id}
          data={data}
          handleAddToCook={handleAddToCook}
        />
      ))}
    </div>
  );
}

RecipesCards.propTypes = {
  cardData: PropTypes.array.isRequired,
  handleAddToCook: PropTypes.func.isRequired,
};
