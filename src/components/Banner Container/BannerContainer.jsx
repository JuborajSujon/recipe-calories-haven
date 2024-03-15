export default function BannerContainer() {
  return (
    <section className="rounded-3xl">
      <div
        className="hero h-[75vh] lg:h-[60vh] bg-cover bg-no-repeat bg-center rounded-3xl"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(21,11,43,0.7),rgba(21,11,43,0.0)),url(https://i.ibb.co/X7ftJpf/banner.jpg)",
        }}>
        <div className="hero-overlay opacity-0 rounded-3xl"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
              Welcome to Flavor Haven: Indulge in Exquisite Flavors
            </h1>
            <p className="mb-5">
              Step into a world of culinary delights at Flavor Haven, where
              every dish tells a story of flavor and passion. From savory
              classics to innovative creations, our menu is crafted to tantalize
              your taste buds and leave you craving for more.
            </p>
            <div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
