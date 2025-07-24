// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(null);

    emailjs
      .sendForm(
        "service_5ud17hr",     // ✅ Your EmailJS service ID
        "template_ib99b2q",    // ✅ Your EmailJS template ID
        form.current,
        "LIkW79aQuQFGfPLyw"    // ✅ Your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (err) => {
          console.error("Email send failed:", err);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Info */}
      <div className="text-center space-y-1 text-base">
        <p><strong>Email:</strong> brewbites684@gmail.com</p>
        <p><strong>Phone:</strong> 022-20822830</p>
        <p>
          <strong>Location:</strong> Paradox Museum, Shreeniwas House, 27 H Somani Marg,<br />
          Azad Maidan, Fort, Mumbai
        </p>
        <p><strong>Hours:</strong> Mon–Fri: 8am–6pm, Sat–Sun: 9am–4pm</p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow p-6 rounded-lg space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="you@example.com"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="title"
            placeholder="Subject (optional)"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            required
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 transition"
        >
          Send Message
        </button>

        {sent && (
          <p className="text-green-600 mt-2 font-medium">Message sent successfully!</p>
        )}
        {error && (
          <p className="text-red-600 mt-2 font-medium">{error}</p>
        )}
      </form>

      {/* Google Map */}
      <div className="mt-10 w-full">
        <iframe
          title="Brew & Bites Mumbai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8417300793916!2d72.82929367527353!3d18.936402282250084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1d76c2691b3%3A0x65c9e0f1d0ce7eb4!2sParadox%20Museum%20Mumbai!5e0!3m2!1sen!2sin!4v1721823021416!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/search/Paradox%20Museum%20Mumbai/@18.93640228,72.83148266,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
