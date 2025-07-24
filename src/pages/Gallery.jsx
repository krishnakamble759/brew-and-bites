import { useState } from "react"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/captions.css";

// Local assets
import gallery1 from "../assets/images/gallery-1.jpg"
import gallery2 from "../assets/images/gallery-2.jpg"
import gallery3 from "../assets/images/gallery-3.jpg"

// Local images
const localSlides = [
  {
    src: gallery1,
    title: "Cappuccino",
    description: "Creamy blend of espresso and milk.",
  },
  {
    src: gallery2,
    title: "Latte",
    description: "Smooth espresso with steamed milk.",
  },
  {
    src: gallery3,
    title: "Espresso",
    description: "Strong and bold, perfect for a boost.",
  },
]

// Remote images
const remoteSlides = [
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    title: "Coffee Beans",
    description: "Freshly roasted specialty beans.",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    title: "Cafe Table",
    description: "Perfect setup for work and relaxation.",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    title: "Cappuccino Art",
    description: "Foam-topped with heart latte art.",
  },
  {
    src: "https://images.unsplash.com/photo-1588854337119-1f95a85d6b8f",
    title: "Croissant",
    description: "Flaky, buttery, and baked in-house.",
  },
  {
    src: "https://images.unsplash.com/photo-1570560258879-af7f8264c287",
    title: "Layered Cake",
    description: "Light sponge with cream and fruit.",
  },
  {
    src: "https://images.unsplash.com/photo-1512446733611-9099a758e0b1",
    title: "Barista at Work",
    description: "Passionate hands crafting coffee magic.",
  },
]

// Combined slides
const slides = [...localSlides, ...remoteSlides]

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.title || `Gallery image ${idx + 1}`}
            onClick={() => {
              setIndex(idx)
              setOpen(true)
            }}
            className="rounded-lg shadow-md cursor-zoom-in hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Captions, Thumbnails]}
      />
    </div>
  )
}
