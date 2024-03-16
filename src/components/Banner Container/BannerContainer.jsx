export default function BannerContainer() {
  return (
    <section className="rounded-3xl">
      <div
        className="hero h-[70vh] lg:h-[60vh] bg-cover bg-no-repeat bg-center rounded-3xl"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(21,11,43,0.7),rgba(21,11,43,0.0)),url(https://i.ibb.co/X7ftJpf/banner.jpg)",
        }}>
        <div className="hero-overlay opacity-0 rounded-3xl"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to Flavor Haven: Indulge in Exquisite Flavors
            </h1>
            <p className="mb-5">
              Step into a world of culinary delights at Flavor Haven, where
              every dish tells a story of flavor and passion. From savory
              classics to innovative creations, our menu is crafted to tantalize
              your taste buds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">
              <button className="py-2 px-6 md:py-3.5 md:px-9 lg:py-4 lg:px-12 font-bold text-sm md:text-base lg:text-xl border border-secondary bg-secondary text-primary rounded-full">
                Explor Now
              </button>
              <button className="py-2 px-4 md:py-3.5 md:px-6 lg:py-4 lg:px-8 font-bold text-sm md:text-base lg:text-xl border border-white bg-transparent text-white rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
