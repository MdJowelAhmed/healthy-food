const RightSidebar = () => {
    return (
      <div className="bg-gray-100 p-4 space-y-4">
        <h3 className="font-semibold">Settings</h3>
        <div>
          <label className="block text-sm font-medium">Paragraph Font Size</label>
          <input type="range" className="w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Choose Vitamin Type</label>
          <select className="w-full border px-2 py-1 rounded-md">
            <option>All Vitamins</option>
            <option>Vitamin A</option>
            <option>Vitamin C</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default RightSidebar;
  