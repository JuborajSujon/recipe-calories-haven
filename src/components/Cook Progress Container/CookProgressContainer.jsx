import CurrentCooking from "./Current Cooking/CurrentCooking";
import WantToCook from "./Want To Cook/WantToCook";
export default function CookProgressContainer() {
  return (
    <div className="lg:w-2/5">
      <div className="flex flex-col gap-8 px-6 py-10 border border-slate-300 rounded-2xl bg-white shadow-xl ">
        <WantToCook />
        <CurrentCooking />
      </div>
    </div>
  );
}
