function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-center">
        BREW & BITES is a cozy café located in the heart of the city, serving specialty
        coffee and artisan pastries made with love. Our mission is to create a warm,
        welcoming space for everyone to enjoy.
      </p>

      {/* Timeline Section */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Our Story</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-honey pl-4">
            <h3 className="font-semibold text-roast">2018 – The Dream</h3>
            <p>It all started with a love for coffee and community...</p>
          </div>
          <div className="border-l-4 border-honey pl-4">
            <h3 className="font-semibold text-roast">2019 – First Brew</h3>
            <p>BREW & BITES opened its first location downtown.</p>
          </div>
          <div className="border-l-4 border-honey pl-4">
            <h3 className="font-semibold text-roast">2023 – Growing Together</h3>
            <p>We expanded to serve more people and introduced seasonal specials.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Anna"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
            />
            <h3 className="font-bold text-roast">Anna</h3>
            <p className="text-sm text-accent">Head Barista</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="Liam"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
            />
            <h3 className="font-bold text-roast">Liam</h3>
            <p className="text-sm text-accent">Pastry Chef</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt="Sophia"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
            />
            <h3 className="font-bold text-roast">Sophia</h3>
            <p className="text-sm text-accent">Cafe Manager</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
