export default function WantToCook() {
  return (
    <div>
      <h3 className="text-dark02 sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
        Want To Cook : 5
      </h3>
      <div className="divider w-2/3 mx-auto"></div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
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
            {/* row 1 */}
            <tr className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200 font-fira-sans leading-6 ">
              <th>1</th>
              <td className="opacity-80">Hart Hagerty</td>
              <td className="opacity-80">20 min</td>
              <td className="opacity-80">300 calories</td>
              <td>
                <button className="btn bg-secondary text-sm font-medium text-primary rounded-full px-4 min-h-2 h-8">
                  Preparing
                </button>
              </td>
            </tr>
            {/* row 1 */}
            <tr className="hover:bg-slate-100 text-sm *:px-3 *:py-2 *:border-b *:border-b-slate-200">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>20 min</td>
              <td>300 calories</td>
              <td>
                <button className="btn bg-secondary text-sm font-medium text-primary rounded-full px-4 min-h-2 h-8">
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
