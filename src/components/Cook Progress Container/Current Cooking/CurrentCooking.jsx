import PropTypes from "prop-types";
export default function CurrentCooking({ currentCookItems }) {
  return (
    <div>
      <h3 className="text-dark02 sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
        Currently Cooking : 5
      </h3>
      <div className="divider w-2/3 mx-auto"></div>
      <div className="overflow-x-auto">
        <table className="table-fixed border-collapse">
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
                  className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200 font-fira-sans leading-6 ">
                  <th>{index + 1}</th>
                  <td className="opacity-80">{recipe_name}</td>
                  <td className="opacity-80">{preparing_time}</td>
                  <td className="opacity-80">{calories}</td>
                </tr>
              );
            })}

            {/* total calculation */}
            <tr className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200">
              <th></th>
              <td></td>
              <th>Total Min = 20 min</th>
              <th>Total Calories = 300 calories</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

CurrentCooking.propTypes = {
  currentCookItems: PropTypes.array.isRequired,
};
