import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredItems = [
  {
    name: "Pumpkin Spice Latte",
    img: "https://images.unsplash.com/photo-1605479091625-312be6a71a90",
    price: "$5.5",
  },
  {
    name: "Almond Croissant",
    img: "https://images.unsplash.com/photo-1612197575227-3194ed1f3c5b",
    price: "$4",
  },
  {
    name: "Iced Mocha",
    img: "https://images.unsplash.com/photo-1601312376998-12f23813d0f2",
    price: "$4.5",
  },
];

function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % featuredItems.length);
  const prev = () => setIndex((index - 1 + featuredItems.length) % featuredItems.length);

  const current = featuredItems[index];

  return (
    <div className="mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Featured Item</h2>
      <div className="max-w-md mx-auto bg-white shadow rounded-lg p-4 space-y-2">
        <img
          src={current.img}
          alt={current.name}
          className="rounded-md mx-auto max-h-60 object-cover"
        />
        <h3 className="text-xl font-bold">{current.name}</h3>
        <p className="text-accent">{current.price}</p>
        <div className="space-x-4 mt-2">
          <button
            onClick={prev}
            className="px-3 py-1 bg-roast text-cream rounded hover:bg-accent"
          >
            ‹ Prev
          </button>
          <button
            onClick={next}
            className="px-3 py-1 bg-roast text-cream rounded hover:bg-accent"
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-10 px-4"
    >
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold mt-8">Welcome to BREW & BITES</h1>
        <p className="text-lg text-honey">Brewed with love. Served with soul.</p>
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
          alt="Coffee"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl mt-6"
        />
      </section>

      {/* Our Specials */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Specials</h2>
        <p>Check out our handcrafted coffee and freshly baked bites.</p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>☕ Locally roasted specialty coffee</li>
          <li>🍰 Handmade pastries from scratch</li>
          <li>🌿 Cozy, eco-friendly atmosphere</li>
          <li>📶 Free Wi-Fi and great vibes</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Taste the Difference</h2>
        <p>Browse our menu and discover your new favorite brew!</p>
        <Link
          to="/menu"
          className="inline-block mt-4 px-6 py-2 bg-roast text-cream rounded-lg hover:bg-accent transition"
        >
          View Menu
        </Link>
      </section>

      {/* Testimonials */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="italic">"Best coffee in town! The croissants are to die for."</p>
            <p className="mt-2 font-semibold text-accent">– Emily R.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="italic">"Love the cozy vibe and the friendly team!"</p>
            <p className="mt-2 font-semibold text-accent">– Mark T.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p className="italic">"A perfect spot to work, sip, and relax."</p>
            <p className="mt-2 font-semibold text-accent">– Priya S.</p>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <FeaturedCarousel />
    </motion.div>
  );
}

export default Home;
