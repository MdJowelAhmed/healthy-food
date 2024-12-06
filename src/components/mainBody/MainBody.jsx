const MainBody = () => {
    return (
      <div className="p-6">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold mb-6">Health Benefits Of An Avocado</h1>
  
        {/* First Section */}
        <div className="flex gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Supports eye health:</h2>
            <p className="text-gray-700">
              Spinach contains high levels of Vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.
            </p>
          </div>
          <img
            src="https://fruitnames.net/wp-content/uploads/2023/10/apples-on-a-tree-branch.jpg"
            alt="Avocado"
            className="w-1/3 rounded-lg"
          />
        </div>
  
        {/* Second Section */}
        <div className="flex gap-6 items-start mt-10">
          <img
            src="https://fruitnames.net/wp-content/uploads/2023/10/apples-on-a-tree-branch.jpg"
            alt="Apple"
            className="w-1/3 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Supports eye health:</h2>
            <p className="text-gray-700">
              Spinach contains high levels of Vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration. Spinach also contains other vitamins like Vitamin C and K that boost overall health.
            </p>
          </div>
        </div>
  
        {/* Feedback Section */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-4">Was This Helpful?</h3>
          <div className="flex items-center gap-2">
            <button className="text-orange-500 text-xl">
              <i className="fas fa-star"></i>
            </button>
            <button className="text-orange-500 text-xl">
              <i className="fas fa-star"></i>
            </button>
            <button className="text-orange-500 text-xl">
              <i className="fas fa-star"></i>
            </button>
            <button className="text-orange-500 text-xl">
              <i className="fas fa-star"></i>
            </button>
            <button className="text-gray-400 text-xl">
              <i className="fas fa-star"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MainBody;
  