import PropTypes from "prop-types";
export default function RecipesCard({ data }) {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = data;
  return (
    <section>
      <div className=" border border-slate-300 shadow-xl rounded-2xl p-4 sm:p-6 lg:min-h-[770px] xl:min-h-[880px] flex flex-col justify-between">
        <figure className="rounded-2xl pb-4 sm:pb-6">
          <img
            className="rounded-2xl min-h-60 xl:min-h-80 2xl:min-h-96  object-cover"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="flex flex-col grow justify-between ">
          <div className="space-y-4">
            <h2 className="text-dark02 font-lexend font-bold sm:text-xl">
              {recipe_name}
            </h2>
            <p className="text-dark02 font-fira-sans leading-8">
              {short_description.slice(0, 50)}
            </p>
          </div>
          <div className="divider"></div>
          <div>
            <h2 className="text-dark02 font-lexend font-medium sm:text-lg">
              Intredients : {ingredients.length}
            </h2>
            <ul className="text-dark06 font-fira-sans  leading-6 list-disc list-inside pl-4 pt-3">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>{preparing_time}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <g clipPath="url(#clip0_42_1617)">
                  <path
                    d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
                    stroke="#282828"
                    strokeOpacity="0.8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42_1617">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>{calories}</span>
            </div>
          </div>
          <div className="">
            <button className="btn bg-secondary text-lg font-medium text-primary rounded-full px-6 min-h-2 h-10">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

RecipesCard.propTypes = {
  data: PropTypes.object.isRequired,
};
