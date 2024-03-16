export default function RecipesCard() {
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-6">
          <div className="space-y-4">
            <h2 className="card-title">Spaghetti Bolognese</h2>
            <p>Classic Italian pasta dish savory meat sausce.</p>
          </div>
          <div className="divider"></div>
          <div></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
