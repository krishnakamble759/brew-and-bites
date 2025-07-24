import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-600 text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Brew & Bites Café. All rights reserved.</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}