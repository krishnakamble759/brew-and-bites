import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

import featured1 from '../assets/images/featured-1.jpg'
import featured2 from '../assets/images/featured-2.jpg'
import featured3 from '../assets/images/featured-3.jpg'

const featuredItems = [
  { name: "Pumpkin Latte", img: featured1, price: "$5.5" },
  { name: "Almond Croissant", img: featured2, price: "$4" },
  { name: "Mocha Iced", img: featured3, price: "$4.5" }
]

function FeaturedCarousel() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Menu</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop
      >
        {featuredItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-6 rounded-xl shadow text-center max-w-sm mx-auto">
              <img src={item.img} alt={item.name} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-accent">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default FeaturedCarousel

