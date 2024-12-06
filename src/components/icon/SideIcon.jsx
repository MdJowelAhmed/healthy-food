const SideIcons = () => {
    return (
      <div className="flex flex-col items-center gap-4 py-4">
        <button className="text-gray-600 hover:text-orange-600">
          <i className="fas fa-home"></i>
        </button>
        <button className="text-gray-600 hover:text-orange-600">
          <i className="fas fa-heart"></i>
        </button>
        <button className="text-gray-600 hover:text-orange-600">
          <i className="fas fa-cog"></i>
        </button>
      </div>
    );
  };
  
  export default SideIcons;
  