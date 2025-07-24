function Menu() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Menu</h1>

      {/* Drinks Section */}
      <section>
        <h2 className="text-xl font-semibold text-accent">☕ Drinks</h2>
        <ul className="list-disc list-inside">
          <li>Espresso - ₹250</li>
          <li>Cappuccino - ₹300</li>
          <li>Iced Latte 🧋 - ₹350</li>
          <li>Mocha - ₹400</li>
        </ul>
      </section>

      {/* Pastries Section */}
      <section>
        <h2 className="text-xl font-semibold text-accent">🥐 Pastries</h2>
        <ul className="list-disc list-inside">
          <li>Butter Croissant - ₹300</li>
          <li>Almond Danish - ₹350</li>
          <li>Chocolate Muffin - ₹280</li>
          <li>Cheesecake 🍰 - ₹400</li>
        </ul>
      </section>

      {/* Seasonal Specials */}
      <section>
        <h2 className="text-xl font-semibold text-accent">🎉 Seasonal Specials</h2>
        <ul className="list-disc list-inside">
          <li>Pumpkin Spice Latte - ₹450</li>
          <li>Eggnog Cold Brew - ₹400</li>
        </ul>
      </section>
    </div>
  )
}

export default Menu
