const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20">
      <h3 className="text-white text-xl font-semibold">Glassmorphism Card</h3>
      <p className="text-gray-300 mt-2">
        A stunning UI design with a transparent glass effect using Tailwind CSS.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
};

export default Card;
