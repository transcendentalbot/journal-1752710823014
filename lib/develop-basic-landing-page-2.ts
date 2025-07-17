const HeroSection = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2 text-white">
          Welcome to Journal
        </h2>
        <h3 className="text-2xl mb-8 text-gray-200">
          A simple and elegant journaling app.
        </h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;