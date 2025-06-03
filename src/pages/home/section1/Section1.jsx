import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative font-grotesk w-full h-screen text-white flex overflow-hidden ">
      {/* Left: Animated Text */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-[1] max-w-[600px]">
            Future-proofing<br />
            businesses<br />
            through design
          </h1>
          <motion.p
            className="text-base md:text-lg text-white mt-6 max-w-[520px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            TM is a product design and innovation group that cracks tough problems
            for established organizations looking to change — and startups looking
            to change the world.
          </motion.p>
        </motion.div>
      </div>

      {/* Right: Animated Placeholder Image */}
      <motion.div
        className="w-[40%] h-full relative hidden md:block"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuAzPYPKx6VkM_GxT1YDeQJdLsSDGtTabp9A&s"
          alt="Hero Placeholder"
          className="absolute right-0 top-0 h-full w-auto object-cover"
        />
      </motion.div>

      {/* Big Animated Circle Button */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-10 left-[60%] md:left-[55%] w-64 h-64 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-3xl animate-bounce">↓</span>
      </motion.button>
    </section>
  );
};

export default Section1;
