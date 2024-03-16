import PropTypes from "prop-types";
export default function WantToCook({
  cookItems,
  handleCurrentCooking,
  handleRemoveItem,
}) {
  return (
    <div>
      <h3 className="text-dark02 sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
        Want To Cook : {cookItems.length}
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cookItems.map((item, index) => {
              const { recipe_name, preparing_time, calories } = item;
              return (
                <tr
                  key={index}
                  className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200 font-fira-sans leading-6 text-center">
                  <th>{index + 1}</th>
                  <td className="opacity-80">{recipe_name}</td>
                  <td className="opacity-80">{preparing_time}</td>
                  <td className="opacity-80">{calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleCurrentCooking(item);
                        handleRemoveItem(item.recipe_id);
                      }}
                      className="btn bg-secondary text-sm font-medium text-primary rounded-full px-4 min-h-2 h-8 hover:bg-[#77fec5]">
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

WantToCook.propTypes = {
  cookItems: PropTypes.array.isRequired,
  handleCurrentCooking: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
