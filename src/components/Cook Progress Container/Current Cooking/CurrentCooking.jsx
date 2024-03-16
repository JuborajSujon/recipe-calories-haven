import PropTypes from "prop-types";
export default function CurrentCooking({ currentCookItems }) {
  let totalCalories = 0;
  let totalTime = 0;
  if (currentCookItems.length !== 0) {
    currentCookItems.forEach((item) => {
      for (const price in item) {
        if (price === "calories") {
          totalCalories += parseInt(item[price]);
        }
        if (price === "preparing_time") {
          totalTime += parseInt(item[price]);
        }
      }
    });
  }

  return (
    <div>
      <h3 className="text-dark02 sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
        Currently Cooking : {currentCookItems.length}
      </h3>
      <div className="divider w-2/3 mx-auto"></div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse text-center">
          {/* head */}
          <thead>
            <tr className="text-sm font-fira-sans text-dark06">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentCookItems.map((item, index) => {
              const { recipe_name, preparing_time, calories } = item;
              return (
                <tr
                  key={index}
                  className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200 font-fira-sans leading-6 text-center">
                  <th>{index + 1}</th>
                  <td className="opacity-80 text-left">{recipe_name}</td>
                  <td className="opacity-80">{preparing_time}</td>
                  <td className="opacity-80">{calories}</td>
                </tr>
              );
            })}

            {/* total calculation */}
            <tr className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200">
              <th></th>
              <td></td>
              <th>Total Min = {totalTime} min</th>
              <th>Total Calories = {totalCalories} calories</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

CurrentCooking.propTypes = {
  currentCookItems: PropTypes.array.isRequired,
  totalCalories: PropTypes.number,
  totalTime: PropTypes.number,
};
