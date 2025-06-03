import React from "react";

const Section1 = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative font-grotesk w-full h-screen text-white flex overflow-hidden">
      {/* Left: Text Centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 z-10">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold leading-18 max-w-[600px]">
            Future-proofing<br />
            businesses<br />
            through design
          </h1>
          <p className="text-base md:text-lg text-white mt-6 max-w-[520px]">
            TM is a product design and innovation group that cracks tough problems
            for established organizations looking to change — and startups looking
            to change the world.
          </p>
        </div>
      </div>

      {/* Right: Placeholder Image */}
      <div className="w-[40%] h-full relative hidden md:block">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAzPYPKx6VkM_GxT1YDeQJdLsSDGtTabp9A&s"
          alt="Hero Placeholder"
          className="absolute right-0 top-0 h-full w-auto object-cover"
        />
      </div>

      {/* Big Circle Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-[60%] md:left-[55%] w-64 h-64 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition"
      >
        <span className="text-3xl animate-bounce">↓</span>
      </button>
    </section>
  );
};

export default Section1;
