import { MdOutlineSubtitlesOff } from "react-icons/md";

const RightSidebar = () => {
    return (
      <div className="bg-white p-4 space-y-4 rounded-md hidden md:block">
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
        <div className="flex justify-between items-center ">
          <p>Turn of subtitle</p>
          <MdOutlineSubtitlesOff />
        </div>
      </div>
    );
  };
  
  export default RightSidebar;
  