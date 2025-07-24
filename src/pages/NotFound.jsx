import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
